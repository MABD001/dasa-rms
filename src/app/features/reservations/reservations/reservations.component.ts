import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReservationsService } from '../reservations.service';
import { HttpClient } from '@angular/common/http';
import { ReservationsReponse } from '../reservation-response.model';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css',
  providers: [ReservationsService]
})
export class ReservationsComponent implements OnInit{

  reservationsReponse: ReservationsReponse[] = [];

  constructor(private http: HttpClient,private reservationsService: ReservationsService,private router:Router) { }

  ngOnInit(): void {
    this.reservationsService.getAll().subscribe({
      next:(response) => {
        if (response.code === '200' && response.status) {
          this.reservationsReponse = response.data;
          this.reservationsReponse.sort((a, b) => a.id - b.id);

        } else {
          console.error('Error fetching data:', response.message);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  navigateToFeedback(reservationsReponse: ReservationsReponse): void {
    this.router.navigate(['/Feedback'], { state: { reservationsReponse: reservationsReponse } });
  }

}
