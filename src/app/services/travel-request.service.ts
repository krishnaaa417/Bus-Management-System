import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelRequestService {

  constructor(private http: HttpClient) {}
  
  createRequest(request: any) {
    return this.http.post('/api/travel-requests', request);
  }
 
}
