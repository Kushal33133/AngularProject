import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getData(){
    return [
      { id: 1, name: 'John Doe', email: 'test@123'}]
  }
}
