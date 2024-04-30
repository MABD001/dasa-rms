import { Component, OnDestroy } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AddNewCustomer } from './add-new-customer.model';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-customer.component.html',
  styleUrl: './add-new-customer.component.css',
  providers: [CustomerService]
})
export class AddNewCustomerComponent implements OnDestroy{
  model: AddNewCustomer;
  private AddNewMenuSubscription?: Subscription;
  router!: Router;
  constructor(private customerService: CustomerService,router:Router){
    this.router = router;
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: ''
    };
  }
  returnToCustomerList(){
    this.router.navigate(['/customers']);

}

  onFormSubmit(){
    this.AddNewMenuSubscription = this.customerService.addNew(this.model).subscribe({
      next:(response) => {
        console.log(response);
        this.returnToCustomerList();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnDestroy(): void {
    this.AddNewMenuSubscription?.unsubscribe();
  }

}
