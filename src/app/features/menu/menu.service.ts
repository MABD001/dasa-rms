import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_BASE_URL } from '../../api.config';
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) { }
   addMenu(description:string): Observable<void> {
      const params = new HttpParams().set('description', description);

      return this.http.post<void>(API_BASE_URL+'Menu/addNewMenu', null, {params})
   }
   getAll(){
    return this.http.get<any>(API_BASE_URL+'Menu/getAllMenu');
   }

}
