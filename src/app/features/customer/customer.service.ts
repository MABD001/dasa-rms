import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../api.config';
import { AddNewCustomer } from './add-new-customer/add-new-customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  addNew(addNewCustomer:AddNewCustomer): Observable<void> {
     return this.http.post<void>(API_BASE_URL+'Customer/addNewCustomer',addNewCustomer )
  }
  getAll(){
   return this.http.get<any>(API_BASE_URL+'Customer/getAllCustomer');
  }
}
