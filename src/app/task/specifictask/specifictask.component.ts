import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import {Task} from './specifictask.model'
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-specifictask',
  imports: [CardComponent, DatePipe],
  standalone: true,
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
