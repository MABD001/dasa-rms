import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Menu } from '../../menu/menu/menu.model';
import { NgFor, NgIf } from '@angular/common';




@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemComponent implements OnInit {

  menu: Menu | undefined;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.menu = history.state.menu;
    this.menu?.menuItem.sort((a, b) => a.id - b.id);
  }
  navigateToAddNewMenuItem(menuItem: Menu): void {
    this.router.navigate(['menu-item/add-new'], { state: { menu: menuItem } });
  }

}
