import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../clientService';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialogClose, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewCompanies } from '../view-companies/view-companies';
 
 

 
@Component({
  selector: 'app-company-registration-form',
  imports: [ReactiveFormsModule, MatDialogClose],
  templateUrl: './company-registration-form.html',
  styleUrl: './company-registration-form.css'
})
export class CompanyRegistrationForm {
  companyNamePlaceholder = '';
  cityPlaceholder = '';
  addressPlaceholder= '';
  sectorPlaceholder ='';
  emailPlaceholder ='';
  telNoPlaceholder ='';
   readonly dialogRef = inject(MatDialogRef<ViewCompanies>)
    private router = inject(Router)
    constructor(private clientService : ClientService){
      
    }
  


  form = new FormGroup({
    companyName :new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    city : new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    sector : new FormControl('',[Validators.required]), 
     email : new FormControl('',[Validators.required]),
     telNo : new FormControl('',[Validators.required]), 
     
     
     

  });

  


  onNoClick(): void {
    this.dialogRef.close();
     this.router.navigate(['/view-companies']);
     console.log(this.form)
  }

  registerCompany(): void {
    this.clientService.registerCompany({
        id:0,
        name: this.form.value.companyName!,
        city:this.form.value.city!,
        registrationNO : '',
        address:this.form.value.address!,
        sector:this.form.value.sector!,
        email: this.form.value.email!,
        telNo:this.form.value.telNo!,
        status:'ACTIVE',
    })

    

    
    if(this.form.controls['companyName'].pristine){
      this.companyNamePlaceholder= 'required'
      // if(this.form.controls['companyName']){
      //   this.companyNamePlaceholder= ' exceed max[20]'
      // }
     }



    if(this.form.controls['city'].pristine){
      this.cityPlaceholder= 'required city'
    }

    if(this.form.controls['address'].pristine){
      this.addressPlaceholder= 'required adress'
    }

    if(this.form.controls['sector'].pristine){
      this.sectorPlaceholder= 'required sector'
    }

    if(this.form.controls['email'].pristine){
      this.emailPlaceholder= 'required email'
      

      }
    

    if(this.form.controls['telNo'].pristine){
      this.telNoPlaceholder= 'required telNo'
    }

}
}
