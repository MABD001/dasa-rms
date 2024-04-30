import { NgIf, NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Menu } from '../../menu/menu/menu.model';
import { ReservationsReponse } from '../reservation-response.model';
import { CreateFeedback } from '../create-feedback.model';
import { FeedbackService } from './feedback.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  providers: [FeedbackService]
})
export class FeedbackComponent implements OnInit{
  ngOnInit(): void {
    this.reservationsReponse = history.state.reservationsReponse;
  }

  model :CreateFeedback;
  reservationsReponse: ReservationsReponse | undefined;
  private AddFeedbackSubscriptions?: Subscription;
  router :Router;
  constructor(private route: ActivatedRoute,router:Router,private feedbackService:FeedbackService){
    this.router = router;
      this.model ={
        feedback: '',
        customerId: 0,
        reservation: 0
      };

  }
  returnToReservationsList(){
    this.router.navigate(['/reservations']);

}

  onFormSubmit(){
    if(this.reservationsReponse){
      this.model.customerId = this.reservationsReponse?.customer.id;
      this.model.reservation = this.reservationsReponse?.id;

    }
    this.AddFeedbackSubscriptions = this.feedbackService.addNew(this.model).subscribe({
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
    this.AddFeedbackSubscriptions?.unsubscribe();
  }


}
