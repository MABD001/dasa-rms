import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomerService } from './customer.service';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgFor,RouterModule,HttpClientModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
  providers: [CustomerService]
})
export class CustomerComponent implements OnInit{

        customer: Customer[] = [];

    constructor(private http: HttpClient,private customerService: CustomerService,private router:Router) { }

    ngOnInit(): void {
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
