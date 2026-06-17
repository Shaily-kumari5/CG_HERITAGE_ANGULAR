import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login(): void {

    if (
      this.username === 'admin' &&
      this.password === 'admin123'
    ) {

      this.auth.login();

      this.router.navigate(['/dashboard']);

    } else {

      alert(
        'Invalid Credentials!\n\nUsername: admin\nPassword: admin123'
      );
    }
  }
}