import { Component, inject } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { Person } from '../../models/person.model';
import { EditUser } from '../../edit-user';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-users',
  imports: [EditUser, MatIcon, MatButtonModule],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers {


private users : Person[] = DUMMY_USERS
private router = inject(Router)

  get getUsers(){
    return this.users
  }

  onClick() {
      this.router.navigate(['create-user'])
  }

  removeUser(user : string){
    this.users = this.users.filter((s)=> s.employNO !== user)
  }
}
