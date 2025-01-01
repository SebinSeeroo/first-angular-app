import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../specifictask/specifictask.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: true,
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Input({required: true}) userId !: string;

  private taskService = inject(TaskService);

  enteredTitle = '';
  enteredSummery = '';
  enteredDate = '';
  
  onCancel(){
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({ title: this.enteredTitle,
      summary: this.enteredSummery,
      date: this.enteredDate}, this.userId);
      this.close.emit();
    }
    
}
