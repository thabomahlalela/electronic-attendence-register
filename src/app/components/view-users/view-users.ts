import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { User } from '../../models/user.model';

@Component({
  selector: 'app-view-users',
  imports: [],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers {
  users : User[] = DUMMY_USERS

  get getUsers(){
    return this.users
  }
}
