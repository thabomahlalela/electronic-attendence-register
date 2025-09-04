import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../clientService';

@Component({
  selector: 'app-attence-register',
  imports: [ReactiveFormsModule],
  templateUrl: './attence-register.html',
  styleUrl: './attence-register.css'
})
export class AttenceRegister {

  constructor(private clientService : ClientService){}

  name ='';
  surname = '';
  email ='';
  phoneNumber ='';
  date ='';
  form = new FormGroup({
    name :new FormControl(''),
    surname : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
    date : new FormControl('') ,

    tittle :new FormControl(''),
    description:new FormControl(''),
    startTime :new FormControl(''),
    endTime : new FormControl(''),
    location : new FormControl(''),
    status: new FormControl(''),
    })
   

   captureAttendecy(){
    this.clientService.captureAttences({
      attendeeId :0,
      user : {
        id:0,
        name :this.form.value.name!,
        surname :this.form.value.surname!,
        phoneNumber : this .form.value.phoneNumber!,
        email : this.form.value.email!
      },
      meeting : {

          id:0,
  title :this.form.value.tittle!,
  description: this.form.value.description!,
  startTime: this.form.value.startTime!,
  endTime: this.form.value.endTime!,
  location : this.form.value.location!,
  status : this.form.value.startTime!,
  date:this.form.value.date!

      }

    })
    const attence = this.form.value
  console.log(attence)

   }

   

}
