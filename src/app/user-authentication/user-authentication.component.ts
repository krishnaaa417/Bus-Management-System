import { Component } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrl: './user-authentication.component.css'
})
export class UserAuthenticationComponent {
  credentials: any = {}; // Placeholder for user credentials
  authenticationSuccess: boolean | null = null; // Indicates if authentication was successful

  constructor(private userAuthService: UserAuthService) {}

  authenticateUser() {
    this.userAuthService.authenticate(this.credentials).subscribe(response => {
      console.log('User authenticated successfully', response);
      this.authenticationSuccess = true; // Set success flag
    }, error => {
      console.error('Error authenticating user', error);
      this.authenticationSuccess = false; // Set error flag
    });
  }
}
