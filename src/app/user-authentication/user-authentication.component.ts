import { Component } from '@angular/core';
import { ApiError } from '../user-registration/ApiError';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrl: './user-authentication.component.css'
})
export class UserAuthenticationComponent {
  credentials = { username: '', password: '' };
  authenticationSuccess = false;

  constructor(private authenticationService: AuthenticationService) {}

  authenticateUser() {
    this.authenticationService.authenticate(this.credentials.username, this.credentials.password).subscribe(
      response => {
        console.log('User authenticated successfully', response);
        this.authenticationSuccess = true;
      },
      error => {
        console.error('Error authenticating user', error);
        this.authenticationSuccess = false;
      }
    );
}
}
