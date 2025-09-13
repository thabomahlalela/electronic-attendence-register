import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  emailPlaceholder='email';
  passwordPlaHolder ='password';
   
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

    }
}
