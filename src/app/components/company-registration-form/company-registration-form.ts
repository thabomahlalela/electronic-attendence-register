import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-company-registration-form',
  imports: [ReactiveFormsModule ],
  templateUrl: './company-registration-form.html',
  styleUrl: './company-registration-form.css'
})
export class CompanyRegistrationForm {
  form = new FormGroup({
    companyName :new FormGroup(''),
    city : new FormGroup(''),
    sector : new FormGroup(''), 
    email : new FormGroup(''),
    telNo : new FormGroup(''), 

  });

  onSubmit() {

  }

}
