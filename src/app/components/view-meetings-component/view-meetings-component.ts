import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Meeting } from '../../models/meeting.models';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientService } from '../../clientService';

 


@Component({
  selector: 'app-view-meetings-component',
  imports: [MatIcon, MatButtonModule, RouterOutlet],
  templateUrl: './view-meetings-component.html',
  styleUrl: './view-meetings-component.css'
})
export class ViewMeetingsComponent {

    private router = inject(Router);
    private cdr = inject(ChangeDetectorRef);
    private _snackBar = inject(MatSnackBar);
    isUndo = false;
 
    message = 'meeting deleted';
    action ='undo';
 

  
   private meetings! : Meeting[]
   private clientService = inject(ClientService);
   
   constructor(private route :ActivatedRoute){

    this.clientService.viewMeetings().subscribe({
        next : (m)=>{
            this.meetings = m
            this.cdr.detectChanges()
        }
    })
    console.log(this.meetings)
   }
    


             
onAdd() {
    this.router.navigate(['add-meeting'],{relativeTo : this.route});
    // this.router.navigate(['attendace-register'])
}

onDeleteMeeting(meeting:Meeting) {
    this.meetings = this.meetings.filter((s) => s.id !== meeting.id);

      let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});

      if(this.isUndo === true) {
        this.isUndo = false;
      }

    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised");
        
      if(this.isUndo) {

      } else {
    this.clientService.deleteMeeting(meeting);
      }
    });

    snackBarRef.onAction().subscribe(()=>{
        this.meetings.push(meeting)
     this.cdr.detectChanges()
     this.isUndo =true;
    });

}

onQrCode(meeting:Meeting) {
     const id = meeting.id;
    const surveyORMeeting = "MEETING";
    this.router.navigate(['generate-qr-code', `${id}`, `${surveyORMeeting}`],{relativeTo : this.route});
}

get getMeetings(){
    return this.meetings
}

onViewAttendance(meeting : Meeting){
    this.clientService.setClickedMeeting(meeting)
     this.router.navigate(['view-attendaces'],{relativeTo : this.route})
}

refresh() {
    this.clientService.viewMeetings().subscribe({
        next : (m)=>{
            this.meetings = m
            console.log(m)
            this.cdr.detectChanges()
        }
    })
}

}

















