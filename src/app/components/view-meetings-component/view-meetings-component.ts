import { Component } from '@angular/core';
import { Meeting } from '../../models/capture-meeting';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-view-meetings-component',
  imports: [MatIcon,MatButtonModule,FormsModule],
  templateUrl: './view-meetings-component.html',
  styleUrl: './view-meetings-component.css'
})
export class ViewMeetingsComponent {

id=0;

  meetings:Meeting[] = [
    {
    id:1,
    tittle:"Project",
    description:"Register Attendence 2",
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
onSubmit(id:number){

   const arr = this.meetings.filter(item => item.id === id)

   console.log(arr)


}
             
}
















