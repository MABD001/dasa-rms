import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { TablesService } from '../../tables/tables.service';
import { Tables } from '../../tables/tables.model';
import { Customer } from '../../customer/customer.model';
import { CustomerService } from '../../customer/customer.service';
import { FormsModule } from '@angular/forms';
import { CreateReservation } from './create-reservations.model';
import { Subscription } from 'rxjs';
import { ReservationsService } from '../reservations.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reservations',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './create-reservations.component.html',
  styleUrl: './create-reservations.component.css',
  providers: [ReservationsService,TablesService,CustomerService]
})
export class CreateReservationsComponent implements OnInit,OnDestroy{
  tables: Tables[] = [];
  customer: Customer[] = [];
  model: CreateReservation;
  private AddNewReservationSubscription?: Subscription;
  selectedTableId: number | undefined;
  router: Router;
  constructor(private tablesService: TablesService,private customerService:CustomerService,private reservationsService: ReservationsService,router:Router){
    this.router = router;
    this.model = {
      customerId: 0,
      tableId: 0,
      reservationTime: new Date(),
      numberOfGuests: 0,
    };
  }
  returnToReservationsList(){
    this.router.navigate(['/reservations']);

}
  onFormSubmit(){
    this.AddNewReservationSubscription = this.reservationsService.addNew(this.model).subscribe({
      next:(response) => {
        console.log(response);
        this.returnToReservationsList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.AddNewReservationSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.tablesService.getAll().subscribe({
      next: (response) => {
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

    this.customerService.getAll().subscribe({
      next:(response) => {
        if (response.code === '200' && response.status) {
          this.customer = response.data;
          this.customer.sort((a, b) => a.id - b.id);

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
