import { Component, Input } from '@angular/core';
import { SpecifictaskComponent } from "./specifictask/specifictask.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './specifictask/specifictask.model';
import { TaskService } from './task.service'; 

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [SpecifictaskComponent, NewTaskComponent]
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
