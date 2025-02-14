import { Component, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { ApiError } from './ApiError';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  user: any = {}; // Placeholder for user data
  registrationSuccess: boolean | null = null; // Indicates if registration was successful
  generatedId: number | null = null; // Store the generated ID
  constructor(private userService: UserService) {}

  registerUser() {
    this.userService.register(this.user).subscribe({
      next: (response: any) => {
        console.log('User registered successfully', response);
        this.registrationSuccess = true;
      },
      error: (error: ApiError) => {
        console.error(`Error ${error.status}: ${error.message}`);
        this.registrationSuccess = false;
      }
    });
  }
  
}
