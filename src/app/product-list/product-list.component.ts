import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  standalone: true
})
export class ProductListComponent {

  rate = true;

  product = [
    {
    name: 'Product 1',
    price: 100,
    category: 'Category A',
  },
    {
    name: 'Product 2',
    price: 200,
    category: 'Category A',
  },


]



  toggleRateColor(){
    this.rate = !this.rate;
    console.log("Rate color toggled");

  }

}
