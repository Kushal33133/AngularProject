import { Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

export const routes: Routes = [
    {
    path: 'profile', component:ProductListComponent
    },
    {
        path:'todo/:name', component:TodolistComponent
    },{
        path:"**",component:ProfileCardComponent
    }
];
