import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu/menu.component';
import { AddNewMenuComponent } from './features/menu/add-new-menu/add-new-menu.component';
import { MenuItemComponent } from './features/menuItems/menu-items/menu-items.component';
import { AddNewMenuItemComponent } from './features/menuItems/add-new-menu-item/add-new-menu-item.component';
import { CustomerComponent } from './features/customer/customer.component';
import { AddNewCustomerComponent } from './features/customer/add-new-customer/add-new-customer.component';
import { TablesComponent } from './features/tables/tables.component';
import { AddNewTableComponent } from './features/tables/add-new-table/add-new-table.component';
import { ReservationsComponent } from './features/reservations/reservations/reservations.component';
import { CreateReservationsComponent } from './features/reservations/create-reservations/create-reservations.component';
import { FeedbackComponent } from './features/reservations/feedback/feedback.component';
export const routes: Routes = [
  {
    path:'menu',
    component: MenuComponent,
  },
  {
    path:'menu/add-new',
    component: AddNewMenuComponent,
  },
  {
    path: 'menu-item',
    component: MenuItemComponent,
  },
  {
    path: 'menu-item/add-new',
    component: AddNewMenuItemComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },

  {
    path: 'customers/add-new',
    component: AddNewCustomerComponent,
  },
  {
    path: 'tables',
    component: TablesComponent,
  },

  {
    path: 'tables/add-new',
    component: AddNewTableComponent,
  },
  {
    path: 'reservations',
    component: ReservationsComponent,
  },

  {
    path: 'reservations/add-new',
    component: CreateReservationsComponent,
  },
  {
    path: 'Feedback',
    component: FeedbackComponent,
  }


];
