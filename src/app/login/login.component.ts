import { Component } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  onSubmit(event: Event): void {


    event.preventDefault();
    
    console.log("Form submitted",event);
  }
}
