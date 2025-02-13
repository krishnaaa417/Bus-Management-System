import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  booking: any = {}; // Placeholder for booking data
  bookingSuccess: boolean | null = null; // Indicates if booking was successful

  constructor(private bookingService: BookingService) {}

  bookTicket() {
    this.bookingService.book(this.booking).subscribe(
      response => {
        console.log('Ticket booked successfully', response);
        this.bookingSuccess = true; // Set success flag
      },
      error => {
        console.error('Error booking ticket', error);
        this.bookingSuccess = false; // Set error flag
      }
    );
}
}
