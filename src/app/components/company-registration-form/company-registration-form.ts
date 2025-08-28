import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../clientService';
import { ViewSurvey } from "../../view-survey/view-survey";
import { Survey } from "../survey/survey";

 
@Component({
  selector: 'app-company-registration-form',
  imports: [ReactiveFormsModule],
  templateUrl: './company-registration-form.html',
  styleUrl: './company-registration-form.css'
})
export class CompanyRegistrationForm {
    constructor(private clientService : ClientService){}
  


  form = new FormGroup({
    companyName :new FormControl(''),
    city : new FormControl(''),
    sector : new FormControl(''), 
     email : new FormControl(''),
     telNo : new FormControl(''), 

  });

  

  registerCompany(): void {
    this.clientService.registerCompany({
       id:0,
    name: this.form.value.companyName!,
    city:this.form.value.city!,
      registrationNO : '',
    address:'',
    sector:this.form.value.sector!,
    email: this.form.value.email!,
    telNo:this.form.value.telNo!,
    status:'',
    })
    console.log(this.form.value.companyName,
    //   this.form.value.city,
    //   this.form.value.email,
    //   this.form.value.sector,
    //   this.form.value.telNo,
     
    )

 

}
}
