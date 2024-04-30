import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../../../api.config';
import { CreateFeedback } from '../create-feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
    constructor(private http: HttpClient) { }
     addNew(createFeedback:CreateFeedback): Observable<void> {

        return this.http.post<void>(API_BASE_URL+'Feedback/addNewFeedback', createFeedback)
     }

}
