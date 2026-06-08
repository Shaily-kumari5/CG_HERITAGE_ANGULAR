import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  name = "Shaily Kumari";
  followers = 100;

  follower() {
    this.followers++;
  }
}