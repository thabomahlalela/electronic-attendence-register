import { ChangeDetectorRef, Component,inject, OnInit } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';
import { CustomersAdmin } from './customer-admin.service';
import { Company } from '../models/company.models';
import { ClientService } from '../clientService';


@Component({
  selector: 'app-customers-admin-component',
  imports: [RouterOutlet],
  templateUrl: './customers-admin-component.html',
  styleUrl: './customers-admin-component.css'
})
export class CustomersAdminComponent implements OnInit {


   private router = inject(Router);
   private clientService = inject(ClientService)
   private company! : Company;
   private  cdr = inject(ChangeDetectorRef);


  ngOnInit(): void {
       

    this.clientService.viewCompanies().subscribe({
      next : (companies)=>{
        this.company = companies.find((company)=> company.id == 1)!
        console.log(this.getCompany)
         this.clientService.setClickedCompany(this.getCompany)
        this.cdr.detectChanges()
      }
    })
   
  }

   onHome() {
    this.router.navigate(['custom-admin','view-infor'])
  
    }


    onAdd(){
       
      this.router.navigate(['custom-admin','view-surveys'])
    }
  
    onUsers(){
      console.log('route user')
     this.router.navigate(['custom-admin','view-users'])
      
  
    }

    onComments(){
      this.router.navigate(['custom-admin','view-comments'])
    }
    onMeeting(){
      this.router.navigate(['custom-admin','view-meetings'])
  
    }
    get getCompany(){
      return this.company
    }
  
  

}
