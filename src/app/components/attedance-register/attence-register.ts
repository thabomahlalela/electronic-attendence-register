import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import { Meeting } from '../../models/meeting.models';
import { Person } from '../../models/person.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attence-register',
  imports: [ReactiveFormsModule],
  templateUrl: './attence-register.html',
  styleUrl: './attence-register.css'
})
export class AttenceRegister {
    route = inject(ActivatedRoute);
    // private fb =inject(FormBuilder);
    id!:number;

     constructor(private clientService : ClientService){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(param => {
        this.id = parseInt(param.get('id')!) ;
        console.log(this.id)
      
      });
   

     }
    

   meetings:Meeting[] = [{
      id:1,
      title:"Project",
      description:"Register Attendence",
      startTime:"07:00",
      endTime:"10:00",
      date : '',
      location:"03 Smollet road",
      status:"Happening",
      
    },]




 
  form = new FormGroup({
    name :new FormControl('',Validators.required),
    surname : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    

    
    })
   

   captureAttendecy(){
   let  meeting : Meeting = this.meetings.find((meeting)=>meeting.id == this.id)!
   let people : Person[] =[
      {
      id :0,
        name :this.form.value.name!,
        surname :this.form.value.surname!,
        employNO : '',
        email : this.form.value.email!
    }
   ]
   meeting.people = people

    this.clientService.captureAttences(meeting)
    console.log(this.form.value)
  

   }

   

}
