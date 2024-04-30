import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddNewMenuItemRequest } from './add-new-menu-item-request.model';
import { Subscription } from 'rxjs';
import { MenuItemsService } from '../menu-items.service';
import { Menu } from '../../menu/menu/menu.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { MenuItem } from '../menu-items/menu-item.model';

@Component({
  selector: 'app-add-new-menu-item',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './add-new-menu-item.component.html',
  styleUrl: './add-new-menu-item.component.css',
  providers: [MenuItemsService]
})
export class AddNewMenuItemComponent implements OnInit,OnDestroy{
  model: AddNewMenuItemRequest;
  private AddNewMenuItemSubscription?: Subscription;
  router!: Router;
  menu: Menu | undefined;
  constructor(private menuItemsService: MenuItemsService,private route: ActivatedRoute,router:Router){
    this.router = router;
    this.model = {
      description: '',
      price: 0,
      menuId: 0
    };
  }

    getUpdatedMenuItemsReturn(){
      if(this.menu != undefined){
        this.menuItemsService.getAll(this.menu?.id).subscribe({
          next:(response) => {
            if (response.code === '200' && response.status) {
              this.returnToMenuItem(response.data);


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
  returnToMenuItem(menuItems:MenuItem[]){
    if (this.menu) {
      this.menu.menuItem = menuItems;
      this.menu?.menuItem.sort((a, b) => a.id - b.id);
      this.router.navigate(['/menu-item'], { state: { menu: this.menu } });
    }
    else{
      this.router.navigate(['/menu']);

    }

  }
    ngOnInit(): void {
      this.menu = history.state.menu;
    }
    onFormSubmit(){
    if(this.menu){
      this.model.menuId = this.menu.id;
      this.AddNewMenuItemSubscription = this.menuItemsService.addMenuItem(this.model).subscribe({
        next:(response) => {
          console.log(response);
          this.getUpdatedMenuItemsReturn();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    }
  ngOnDestroy(): void {
    this.AddNewMenuItemSubscription?.unsubscribe();
  }
}
