import { Component,Input, Output, EventEmitter } from '@angular/core';

import {type User } from './user.model';

//const randmIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[randmIndex]);
  //imagePath = computed(()=>'assets/users/' + this.selectedUser().avatar);


  // onSelectUser() {
  //   const randmIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randmIndex]);
  //   }

  @Input() user!: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return "assets/users/" + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
