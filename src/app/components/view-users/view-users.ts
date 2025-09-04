import { Component, inject } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { User } from '../../models/user.model';
import { EditUser } from '../../edit-user';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-view-users',
  imports: [EditUser, MatIcon, MatButtonModule, RouterOutlet],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers {


private users : User[] = DUMMY_USERS
private router = inject(Router)

  get getUsers(){
    return this.users
  }

  onClick() {
      this.router.navigate(['/edit-company/users/create-user'])
  }

  removeUser(user : string){
    this.users = this.users.filter((s)=> s.employNO !== user)
  }
}
