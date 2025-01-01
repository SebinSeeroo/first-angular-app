import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 users = DUMMY_USERS;
 selectedUserId !: string;

 onSelectUser(id: string){
  this.selectedUserId = id;
 }

 get selectedUser(){
  return this.users.find((user)=>user.id === this.selectedUserId);
 }
}
