import { Component, Inject } from '@angular/core';
import { UserService } from '../services/user.service';


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
    this.userService.register(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
        this.registrationSuccess = true; // Set success flag
      }
      ,
      error => {
        console.error('Error registering user', error);
        this.registrationSuccess = false; // Set error flag
      }
    );
  }
}
