import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-capture-meeting',
  imports: [ReactiveFormsModule],
  templateUrl: './capture-meeting.html',
  styleUrl: './capture-meeting.css'
})
export class CaptureMeeting {
[x: string]: any;

  private router = inject(Router)
// title: any;
  
  constructor(private clientService : ClientService,private route :ActivatedRoute){}
  



  form = new FormGroup({
    title : new FormControl('',[Validators.required,Validators.minLength(5)]),
    description: new FormControl('',Validators.required),
    startTime : new FormControl('',Validators.required),
    endTime : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required),
    location : new FormControl('',Validators.required),
    status : new FormControl('',Validators.required),
    attendees : new FormControl('',Validators.required),
    
    

  })

captureMeeting():void{

  this.clientService.captureMeeting({
    id:0,
    title : this.form.value.title!,
  description:this.form.value.description!,
  startTime : this.form.value.startTime!,
  endTime :this.form.value.endTime!,
  date : this.form.value.date!,
  location:this.form.value.location!,
  status: 'UPCOMING'
  // attendees :''

  })
  console.log(this.form.value)

  const meeting = this.form.value
  console.log(meeting)
 this.router.navigate(['meetings'],{relativeTo : this.route})
  

 }



  

}
