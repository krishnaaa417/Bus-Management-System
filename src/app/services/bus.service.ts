import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private apiUrl = 'https://yourapi.com/api/bus';

  constructor(private http: HttpClient) {}

  getBus(busId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${busId}`);
  }
}
