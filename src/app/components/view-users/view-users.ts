import { ChangeDetectorRef, Component, Inject, inject } from '@angular/core';
import {DUMMY_USERS} from '../dummies/dummy-user'
import { Person } from '../../models/person.model';
import { EditUser } from '../../edit-user';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view-users',
  imports: [EditUser, MatIcon, MatButtonModule, RouterOutlet],
  templateUrl: './view-users.html',
  styleUrl: './view-users.css'
})
export class ViewUsers {



// private users : Person[] = DUMMY_USERS
private users! : Person[]
private router = inject(Router)
private clientService = inject(ClientService)
private  cdr = inject(ChangeDetectorRef);
private _snackBar = inject(MatSnackBar);
message = 'user deleted';
action = "undo";
constructor(private route : ActivatedRoute){
  this.clientService.viewEmployees().subscribe({
    next : (e)=>{
      this.users = e
      this.cdr.detectChanges()
    }})
}

  get getUsers(){
    return this.users
  }

  onClick() {
      this.router.navigate(['create-user'],{relativeTo : this.route})
  }

  removeUser(user : Person){
    this.users = this.users.filter((s)=> s.id !== user.id)
    let snackBarRef = this._snackBar.open(this.message, this.action, {duration:5000});

    snackBarRef.afterDismissed().subscribe(() => {
      console.log("snackbar dismised")
    });

    snackBarRef.onAction().subscribe(() => {
      this.users.push(user);
      this.cdr.detectChanges();
    
    });

    this.clientService.deletePerson(user);
  }

  refresh() {
    this.clientService.viewEmployees().subscribe({
    next : (e)=>{
      this.users = e
      this.cdr.detectChanges()
    }})
  }
}
