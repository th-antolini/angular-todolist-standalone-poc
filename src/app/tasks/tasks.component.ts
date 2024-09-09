import { Component, Input } from '@angular/core'
import { TaskComponent } from './task/task.component'
import { NewTaskComponent } from './new-task/new-task.component'
import { type NewTask } from './new-task/new-task.model'
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string

  constructor(private tasksService:TasksService) {}

  isAddingTask = false

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onTaskModalOpen() {
    this.isAddingTask = true
  }

  onTaskModalClose() {
    this.isAddingTask = false
  }

  onAddTask(newTask:NewTask) {
    this.tasksService.addTask(newTask, this.userId)
    this.isAddingTask = false
  }
}
