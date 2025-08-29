import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import id from '@angular/common/locales/extra/id';


@Component({
  selector: 'app-capture-meeting',
  imports: [ReactiveFormsModule],
  templateUrl: './capture-meeting.html',
  styleUrl: './capture-meeting.css'
})
export class CaptureMeeting {

  title ='';
  description = '';
  startTime = '';
  endTime ='';
  location ='';
  status ='';
  attendees ='';

  constructor(private clientService : ClientService){}
  



  form = new FormGroup({
    title : new FormControl('',Validators.required),
    description: new FormControl(''),
    startTime : new FormControl(''),
    endTime : new FormControl(''),
    location : new FormControl(''),
    status : new FormControl(''),
    attendees : new FormControl('')

  })

captureMeeting():void{

  this.clientService.captureMeeting({
    id:0,
    title : this.form.value.title!,
  description:this.form.value.description!,
  startTime : this.form.value.startTime!,
  endTime :this.form.value.endTime!,
  location:this.form.value.location!,
  status: this.form.value.status!
  // attendees :''

  })

  const meeting = this.form.value
  console.log(meeting)

  

 }

  

}
