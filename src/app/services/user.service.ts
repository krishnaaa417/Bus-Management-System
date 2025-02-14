import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  
  getUsers() {
    return this.http.get<any[]>('/api/users');
  }
  register(user: any): Observable<any> {
    return this.http.post('/api/users/register', user);
  }
}
