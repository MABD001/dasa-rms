import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AddNewMenuItemRequest } from './add-new-menu-item/add-new-menu-item-request.model';
import { API_BASE_URL } from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {
  constructor(private http: HttpClient) { }
   addMenuItem(addNewMenuItemRequest:AddNewMenuItemRequest): Observable<void> {

      return this.http.post<void>(API_BASE_URL+'MenuItem/addNewMenuItem', addNewMenuItemRequest)
   }
   getAll(id:number){
    const params = new HttpParams().set('menuId', id);

    return this.http.get<any>(API_BASE_URL+'MenuItem/getAllMenuItem', {params})
   }

}
