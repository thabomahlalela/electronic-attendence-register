import { Component, inject } from '@angular/core';
import { Meeting } from '../../models/meeting.models';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
 


@Component({
  selector: 'app-view-meetings-component',
  imports: [MatIcon, MatButtonModule, RouterOutlet],
  templateUrl: './view-meetings-component.html',
  styleUrl: './view-meetings-component.css'
})
export class ViewMeetingsComponent {
    router = inject(Router)

  meetings:Meeting[] = [
    {
    id:1,
    title:"Project",
    description:"Register Attendence 2",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
  },
{

    
    id:2,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},
{

    
    id:3,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    
    id:4,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    
    id:5,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    
    id:6,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    
    id:7,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    
    id:8,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

   
    id:9,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    
    id:10,
    title:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
}

]
onSubmit(id:number){

   const arr = this.meetings.filter(item => item.id === id)

   console.log(arr)


}
             
onAdd() {
    this.router.navigate(['/edit-company/meetings/add-meeting']);
}

onQrCode(meeting:Meeting) {
     const title = meeting.title;
    const surveyORMeeting = "MEETING";
    this.router.navigate(['/edit-company/meetings/generate-qr-code', `${title}`, `${surveyORMeeting}`]);
}

}
















