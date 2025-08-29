import { Component, inject } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { User } from '../../models/user.model';
import { EditUser } from '../../edit-user';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-users',
  imports: [EditUser, MatIcon],
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
      this.router.navigate(['create-user'])
  }
}
