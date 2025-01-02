import { Component, Input } from '@angular/core';
import { TaskService } from './task.service'; 

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() name?: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
constructor(private tasks:TaskService){}
  

  get selectedUserTask() {
  return this.tasks.getUserTask(this.userId);
  }

  oncompleteTask(id: string) {
    //this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }
}
