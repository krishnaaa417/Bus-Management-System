import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'https://localhost:7210/api/Booking';

  constructor(private http: HttpClient) {}

  // Define the bookingData structure with the new properties
  book(bookingData: { userId: string, busId: string, bookingDate: string, numberOfSeats: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, bookingData);
}
}