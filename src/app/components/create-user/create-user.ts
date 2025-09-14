import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-create-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
  private clientService = inject(ClientService)
  private router = inject(Router)

  constructor(private route :ActivatedRoute){}
   form : FormGroup = new FormGroup(
    {
      name : new FormControl('',Validators.required),
      surname : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.required,Validators.email]),

    }
   )

   onSubmit(){
     console.log(this.form.value.name,this.form.value.surname,this.form.value.email)
     this.clientService.capturePerson({
      id : 0,
      name : this.form.value.name,
      surname :this.form.value.surname,
      employNO : '',
      email : this.form.value.email
     });
     console.log(localStorage.getItem('roles'))

     this.router.navigate(['../'],{relativeTo : this.route})

   }
}
