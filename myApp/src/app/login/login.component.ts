import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,FormsModule // For Reactive Forms
  ]
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  
  ngOnInit(): void {
    alert("Yahoooooo")
    throw new Error('Method not implemented.');
  }



  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          this.authService.setAccessToken(response.jwtToken);
          this.authService.setRefreshToken(response.refreshToken);
          //this.router.navigate(['/']);
        },
        error => {
          console.log('Login failed:', error);
        }
      );
  }
}