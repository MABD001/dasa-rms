
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './menu.model';
import { NgFor } from '@angular/common';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../../account/login/jwt/jwt.interceptor';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule,HttpClientModule,NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [MenuService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],

})
export class MenuComponent implements OnInit{

  menu: Menu[] = [];

  constructor(private http: HttpClient,private menuService: MenuService,private router:Router) { }

  ngOnInit(): void {
    this.menuService.getAll().subscribe({
      next:(response) => {
        if (response.code === '200' && response.status) {
          this.menu = response.data;
          this.menu.sort((a, b) => a.id - b.id);
        } else {
          console.error('Error fetching data:', response.message);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  navigateToMenuItem(menuItem: Menu): void {
    this.router.navigate(['/menu-item'], { state: { menu: menuItem } });

  }
}
