import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  imports: [RouterLink],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

  userName: string = 'Kushal';
  bio: string = 'Software Engineer with a passion for web development and open source contributions.';
  emailVisible: boolean = false;
  email: string = 'kushal@example.com';

  show() {
    this.emailVisible = !this.emailVisible;
    console.log("Profile Card Component Loaded");
  }
}
