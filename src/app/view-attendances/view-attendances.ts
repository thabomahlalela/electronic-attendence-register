import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClientService } from '../clientService';
import { Person } from '../models/person.model';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
 

@Component({
  selector: 'app-view-attendances',
  imports: [MatIcon, MatButtonModule, MatButtonModule,MatCardModule],
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

  onDownload() {
    const headers = Object.keys(this.users[0]);
    let csvData = headers.join(',') + '\n';
    this.users.forEach((row) => {
      csvData += Object.values(row).join(',') + '\n'
    });

    const blob = new Blob([csvData], {type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "attendance.csv";
    a.click();
    URL.revokeObjectURL(url);
     
  }

  onRefresh() {
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
