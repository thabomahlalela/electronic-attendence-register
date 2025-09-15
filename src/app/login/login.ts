import { Location } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../clientService';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login{
 
  emailPlaceholder='email';
  passwordPlaHolder ='password';
  location = inject(Location); 
  private clientService = inject(ClientService)

   constructor() {
    window.history.pushState(null,'', localStorage['href']);
    window.onpopstate = function() {
       window.history.pushState(null,'', localStorage['href']);
    }
  }
   
    form:FormGroup = new FormGroup({
      email :new FormControl('',{
        validators:[Validators.required, Validators.email]
      }),
      password:new FormControl('',{
        validators:[Validators.required]
      }),
    });

 

     

   

    onSubmit() {
       if(this.form.controls["email"].pristine) {
        this.emailPlaceholder = 'required';
       }

       if(this.form.controls["password"].pristine) {
        this.passwordPlaHolder = 'required';
       }

       if(this.form.valid) {
        
         this.clientService.login(this.form.value.email,this.form.value.password)
       }
       console.log(this.form.valid)


    }

    get getError(){
       if(this.form.valid) {
          return this.clientService.getError
       }

       return ;
    
    };
    
}
