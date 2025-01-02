import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import {Task} from './specifictask.model'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-specifictask',
  standalone: false,
  templateUrl: './specifictask.component.html',
  styleUrl: './specifictask.component.css'
})
export class SpecifictaskComponent {
  @Input({required: true}) task!: Task;
  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }

}
