import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Meeting } from '../../models/meeting.models';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    

//   meetings:Meeting[] = [{
//     id:1,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
//   },
// {

//     id:2,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// },
// {

//     id:3,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:4,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:5,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:6,
//     title:"Project",
//     date : '',
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:7,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     date : '',
//     endTime:"10:00",
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:8,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:9,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// },

// {

//     id:10,
//     title:"Project",
//     description:"Register Attendence",
//     startTime:"07:00",
//     endTime:"10:00",
//     date : '',
//     location:"03 Smollet road",
//     status:"Happening",
    
// }

// ]


onAdd() {
    this.router.navigate(['/edit-company/meetings/add-meeting']);
    // this.router.navigate(['attendace-register'])
}

onDeleteMeeting(meeting:Meeting) {
    this.meetings = this.meetings.filter((s) => s.title !== meeting.title);

      let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});

    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised")
    });

    snackBarRef.onAction().subscribe(()=>{
        this.meetings.push(meeting)
     this.cdr.detectChanges()

    })


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












