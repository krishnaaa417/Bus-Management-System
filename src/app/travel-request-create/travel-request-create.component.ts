import { Component } from '@angular/core';
import { TravelRequestService } from '../services/travel-request.service';

@Component({
  selector: 'app-travel-request-create',
  templateUrl: './travel-request-create.component.html',
  styleUrl: './travel-request-create.component.css'
})
export class TravelRequestCreateComponent {

  destination: string = '';
  startDate: string = '';
  endDate: string = '';
  
  constructor(private travelRequestService: TravelRequestService) {}
  
  submitRequest() {
    this.travelRequestService.createRequest({ destination: this.destination, startDate: this.startDate, endDate: this.endDate });
  }
}
