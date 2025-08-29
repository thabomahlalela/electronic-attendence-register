import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { User } from '../../models/user.model';
import { EditUser } from '../../edit-user';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-view-users',
  imports: [EditUser, MatIcon],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers {
  users : User[] = DUMMY_USERS

  get getUsers(){
    return this.users
  }
}
