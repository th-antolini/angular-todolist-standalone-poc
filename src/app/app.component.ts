import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { USERS } from './users-db'
import { HeaderComponent } from './header/header.component'
import { UserComponent } from './user/user.component'
import { TasksComponent } from './tasks/tasks.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
