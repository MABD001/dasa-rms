import { Component, OnInit } from '@angular/core';
import { TablesService } from './tables.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tables } from './tables.model';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JwtInterceptor } from '../../account/login/jwt/jwt.interceptor';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [RouterModule,HttpClientModule,NgFor],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
  providers: [TablesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
})
export class TablesComponent implements OnInit{

        tables: Tables[] = [];

    constructor(private http: HttpClient,private tablesService: TablesService,private router:Router) { }

    ngOnInit(): void {
      this.tablesService.getAll().subscribe({
        next:(response) => {
          if (response.code === '200' && response.status) {
            this.tables = response.data;
            this.tables.sort((a, b) => a.id - b.id);

          } else {
            console.error('Error fetching data:', response.message);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
