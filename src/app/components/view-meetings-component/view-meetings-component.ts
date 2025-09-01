import { Component } from '@angular/core';
import { Meeting } from '../../models/capture-meeting';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-view-meetings-component',
  imports: [MatIcon,MatButtonModule],
  templateUrl: './view-meetings-component.html',
  styleUrl: './view-meetings-component.css'
})
export class ViewMeetingsComponent {



  meetings:Meeting[] = [{
    id:1,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
  },
{

    id:2,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},
{

    id:3,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:4,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:5,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:6,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:7,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:8,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:9,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
},

{

    id:10,
    tittle:"Project",
    description:"Register Attendence",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
}



















]




}












