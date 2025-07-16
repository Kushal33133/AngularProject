import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todolist',
  imports: [CommonModule,FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  taskInput:string = '';
  tasks: string[] = [];
  disabled: boolean = true;
  users: any[] = [];
  name: string | null = "";


 

  constructor(private UserService:UserService,private route:ActivatedRoute){}

  ngOnInit() {
    this.users = this.UserService.getData()
    console.log("Users data:", this.users);

    this.name = this.route.snapshot.paramMap.get('name');
    console.log("Route parameter 'name':", this.name);
  }



  addTask(){
    if(this.taskInput){
      this.tasks.push(this.taskInput);
      this.taskInput = '';
      console.log("Task added:", this.tasks);
    }
  }

removeTask(index: number) {
  if (this.tasks.length) {
    this.tasks.splice(index, 1);
    console.log("Task removed:", this.tasks);
  }
}

editTask(index: number) {
this.taskInput = this.tasks[index];
 this.disabled = false;
}

updateTask(index:number){
  this.tasks[index]= this.taskInput;
  this.taskInput = '';

}

reset(){
  this.tasks = [];
  console.log("All tasks reset.");
}








}
