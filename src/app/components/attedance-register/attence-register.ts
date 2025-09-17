import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import { Meeting } from '../../models/meeting.models';
import { Person } from '../../models/person.model';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-attence-register',
  imports: [ReactiveFormsModule,RouterOutlet],
  templateUrl: './attence-register.html',
  styleUrl: './attence-register.css'
})
export class AttenceRegister {
     private route = inject(ActivatedRoute);
     cdr = inject(ChangeDetectorRef);
     private  id!:number;
     private  meeting!:Meeting;
     isSubmitted = false;
     form = new FormGroup({
    name :new FormControl('',Validators.required),
    surname : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    

    
    })
    // private fb =inject(FormBuilder);
   

     constructor(private clientService : ClientService){}

     ngOnInit(): void {
        this.route.paramMap.subscribe(param => {
          this.id = parseInt(param.get('id')!) ;
          console.log(this.id)
        
        });

        this.clientService.viewMeeting(this.id).subscribe({
          next : (meeting)=>{
            this.meeting = meeting
            console.log(this.meeting)
          }
        })
    

     }
    

   
   

   captureAttendecy(){
   
   let people : Person[] =[
      {
      id :0,
        name :this.form.value.name!,
        surname :this.form.value.surname!,
        employNO : '',
        email : this.form.value.email!
    }
   ]
   this.meeting.people = people

    this.clientService.captureAttences(this.meeting)
    console.log(this.form.value)

    this.isSubmitted = true;
    this.cdr.detectChanges();

   }

   

}
