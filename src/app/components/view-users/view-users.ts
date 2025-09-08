import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { Person } from '../../models/person.model';
import { EditUser } from '../../edit-user';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view-users',
  imports: [EditUser, MatIcon, MatButtonModule, RouterOutlet],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers {
private users : Person[] = DUMMY_USERS;
 cdr = inject(ChangeDetectorRef);
private router = inject(Router);
private _snackBar = inject(MatSnackBar);
 message = 'user deleted';
 action ='undo';


  get getUsers(){
    return this.users
  }

  onClick() {
      this.router.navigate(['/edit-company/users/create-user'])
  }

  removeUser(user : Person){
    this.users = this.users.filter((s)=> s.employNO !== user.employNO);

    let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});

    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised")
    });

    snackBarRef.onAction().subscribe(()=>{
       this.users.push(user);
     this.cdr.detectChanges()

    })
     
  }
}
