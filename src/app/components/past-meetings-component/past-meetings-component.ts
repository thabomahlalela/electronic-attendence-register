import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Meeting } from '../../models/meeting.models';

@Component({
  selector: 'app-past-meetings-component',
  imports: [MatIcon,MatButtonModule],
  templateUrl: './past-meetings-component.html',
  styleUrl: './past-meetings-component.css'
})
export class PastMeetingsComponent {


meetings:Meeting[] = [
    {
    id:1,
    title:"Project",
    description:"Register Attendence 2",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    attendees:[
      {
        id:1,
        name:"Peggy",
        surname:"Scheepers",
        email:"",
        employNO:"",
      },

{
        id:1,
        name:"Thabo",
        surname:"Mahlalela",
        email:"",
        employNO:"",
      },


{
        id:1,
        name:"Jabu",
        surname:"Sibiya",
        email:"",
        employNO:"",
      },



     {
        id:1,
        name:"Tehilla",
        surname:"Sokoti",
        email:"",
        employNO:"",
      } 












    ]
    
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



}
