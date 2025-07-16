import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {


  count:number = 0;


  up(){
    this.count = this.count +1;
  }
  down(){
    this.count = this.count-1;
  }
  reset() {
    this.count =0;
  }
}
