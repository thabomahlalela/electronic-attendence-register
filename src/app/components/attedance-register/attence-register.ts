import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
    id!:number;

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




  constructor(private clientService : ClientService){}
  form = new FormGroup({
    name :new FormControl(''),
    surname : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
    date : new FormControl('') ,

    
    })
   

   captureAttendecy(){
   let  meeting : Meeting = this.meetings.find((meeting)=>meeting.id == 1)!
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
  

   }

   

}
