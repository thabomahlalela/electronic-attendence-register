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
isUndo = false;

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

    
      if(this.isUndo === true) {
        this.isUndo = false;
      }
      
    snackBarRef.afterDismissed().subscribe(() => {
      console.log("snackbar dismised");
       if(this.isUndo) {

      } else {
    this.clientService.deletePerson(user);

      }
    });

    snackBarRef.onAction().subscribe(() => {
      this.users.push(user);
      this.cdr.detectChanges();
    this.isUndo = true;
    });

  }

  refresh() {
    this.clientService.viewEmployees().subscribe({
    next : (e)=>{
      this.users = e
      this.cdr.detectChanges()
    }})
  }
}
