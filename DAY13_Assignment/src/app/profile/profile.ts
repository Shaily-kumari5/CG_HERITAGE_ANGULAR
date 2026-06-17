import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  name = '';
  email = '';
  phone = '';

  saved = true;

  constructor(private router: Router) {}

  markDirty() {
    this.saved = false;
  }

  save() {

    const profileData = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };

    localStorage.setItem(
      'profile',
      JSON.stringify(profileData)
    );

    this.saved = true;

    alert('Profile Saved Successfully');

    this.router.navigate(['/dashboard']);
  }

  canDeactivate() {
    return this.saved;
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}