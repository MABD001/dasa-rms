import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';
import { CreateReservation } from './create-reservations/create-reservations.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }
  addNew(createReservation:CreateReservation): Observable<void> {
     return this.http.post<void>(API_BASE_URL+'Reservation/addNewReservation',createReservation )
  }
  getAll(){
   return this.http.get<any>(API_BASE_URL+'Reservation/getAllReservation');
  }
}
