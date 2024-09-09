import { Injectable } from '@angular/core';
import { TASKS } from '../tasks-db'
import { NewTask } from './new-task/new-task.model'

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = TASKS

  getUserTasks(userId:string) {
    return this.tasks.filter(task => task.userId == userId)
  }

  addTask(newTask:NewTask, userId:string) {
    this.tasks.push({
        id: new Date().getTime().toString(),
        userId: userId,
        title: newTask.title,
        description: newTask.description,
        dueDate: newTask.dueDate
    })
    this.saveTasks
  }

  removeTask(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.saveTasks
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}