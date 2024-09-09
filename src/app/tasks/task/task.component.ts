import { type Task } from './task.model'
import { Component, Input, Output, EventEmitter, inject } from '@angular/core'
import { CardComponent } from "../../ui/card/card.component"
import { DatePipe } from '@angular/common'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({ required: true }) task!: Task;

  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id)
  }
}
