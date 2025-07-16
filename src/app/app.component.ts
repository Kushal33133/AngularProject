import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { ProductListComponent } from './product-list/product-list.component';
import { CounterComponent } from './counter/counter.component';
import { TodolistComponent } from './todolist/todolist.component';


interface Item {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CommonModule, ProfileCardComponent,ProductListComponent,CounterComponent,TodolistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
a=10;
b=20;



// In your component.ts


items: Item[] = [
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
  { id: 3, name: 'Item C' }
];


trackById(index: number, item: Item): number {
  return item.id;
}



role = 'kushal';


isOnline = false;

ngOnInit() {
  console.log("AppComponent initialized");
}

}
