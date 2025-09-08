import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Meeting } from '../../models/meeting.models';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';
 


@Component({
  selector: 'app-view-meetings-component',
  imports: [MatIcon, MatButtonModule, RouterOutlet],
  templateUrl: './view-meetings-component.html',
  styleUrl: './view-meetings-component.css'
})
export class ViewMeetingsComponent {
   private router = inject(Router)
   private meetings! : Meeting[]
   private clientService = inject(ClientService);
   private  cdr = inject(ChangeDetectorRef);

   constructor(){
    this.clientService.viewMeetings().subscribe({
        next : (m)=>{
            this.meetings = m
            this.cdr.detectChanges()
        }
    })
   }
    


             
onAdd() {
    this.router.navigate(['/edit-company/meetings/add-meeting']);
    // this.router.navigate(['attendace-register'])
}

onQrCode(meeting:Meeting) {
     const id = meeting.id;
    const surveyORMeeting = "MEETING";
    this.router.navigate(['/edit-company/meetings/generate-qr-code', `${id}`, `${surveyORMeeting}`]);
}

get getMeetings(){
    return this.meetings
}

onViewAttendance(meeting : Meeting){
    this.clientService.setClickedMeeting(meeting)
     this.router.navigate(['/edit-company/meetings/view-attendaces'])
}

}

















