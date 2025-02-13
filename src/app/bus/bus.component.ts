import { Component } from '@angular/core';
import { BusService } from '../services/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrl: './bus.component.css'
})
export class BusComponent {
booking: any;
bookingSuccess: any;
bookTicket() {
console.log('thanks')
}
  bus: any = {}; // Placeholder for bus data
busId: any;

  constructor(private busService: BusService) {}

  getBusDetails(busId: string) {
    this.busService.getBus(busId).subscribe(response => {
      this.bus = response;
    }, error => {
      console.error('Error fetching bus details', error);
    });
  }
}
