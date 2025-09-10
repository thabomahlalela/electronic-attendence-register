import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import id from '@angular/common/locales/extra/id';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-capture-meeting',
  imports: [ReactiveFormsModule],
  templateUrl: './capture-meeting.html',
  styleUrl: './capture-meeting.css'
})
export class CaptureMeeting {

  private router = inject(Router)
  
  constructor(private clientService : ClientService,private route :ActivatedRoute){}
  



  form = new FormGroup({
    title : new FormControl('',Validators.required),
    description: new FormControl(''),
    startTime : new FormControl(''),
    endTime : new FormControl(''),
    date : new FormControl(''),
    location : new FormControl(''),
    status : new FormControl(''),
    attendees : new FormControl(''),
    

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

  const meeting = this.form.value
  console.log(meeting)
 this.router.navigate(['meetings'],{relativeTo : this.route})
  

 }

  

}
