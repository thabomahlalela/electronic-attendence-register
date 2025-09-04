import { Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { debounceTime, Subscription } from 'rxjs';
import { Company } from '../../models/company.models';

@Component({
  selector: 'app-view-companies',
  imports: [MatButtonModule, MatMenuModule, ReactiveFormsModule,MatIcon],
  templateUrl: './view-companies.html',
  styleUrl: './view-companies.css'
})
export class ViewCompanies {

 private service = inject(ClientService);
 private router = inject(Router);
 private companies = this.service.getCompanies
 subscription! : Subscription;
 form = new FormGroup({
      searchControl : new FormControl()
  })

  formDeregister = new FormGroup({
      deregisterControl : new FormControl()
  })


   constructor(){
     this.subscription = this.form.controls.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((value : string)=>{
      this.companies=this.service.getCompanies.filter(item => item.name.toLowerCase().startsWith(value.toLowerCase()))
      console.log(value)
    })


    this.subscription = this.formDeregister.controls.deregisterControl.valueChanges.pipe(debounceTime(300)).subscribe((value : string)=>{
      this.companies=this.service.getCompanies.filter(item => item.registrationNO.toLowerCase() === (value.toLowerCase()))
      if(value=== ""){
        this.companies = this.service.getCompanies
      }
      console.log(value)
    })


   }
    ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDeregister() {
       let company = this.companies.find((s)=>s.registrationNO === s.registrationNO)
       console.log(company?.name,company?.email)
  } 


  get myCompanies() {
    return this.companies
  }

  onAdd() {
    this.router.navigate(['/register-company'])
  }

  onCompany(company:Company){
    this.service.setClickedCompany(company);
    this.router.navigate(['/edit-company'])
  }
}
