import { Component } from '@angular/core';
import { JwtService } from './jwt/jwt.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private jwtService: JwtService) { }

  login() {
    // Assuming you receive the JWT token in your response
    const jwtToken = 'your_received_jwt_token';
    this.jwtService.setJwt(jwtToken);
  }
}
