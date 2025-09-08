import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClientService } from '../clientService';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-view-attendances',
  imports: [],
  templateUrl: './view-attendances.html',
  styleUrl: './view-attendances.css'
})
export class ViewAttendances {
  private clientService = inject(ClientService);
  private users! : Person[]
  private  cdr = inject(ChangeDetectorRef);


  constructor(){
    this.clientService.viewAttendance().subscribe({
      next : (a)=>{
          this.users = a
          this.cdr.detectChanges();
      }
    })
  }

  get getUsers(){
    return this.users
  }
}
