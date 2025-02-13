import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private apiUrl = 'https://localhost:7210/api/User/register'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

}
