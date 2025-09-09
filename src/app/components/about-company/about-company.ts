import { ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { ViewSurveys } from '../view-surveys/view-surveys';
import { ViewUsers } from "../view-users/view-users";


import {MatMenuModule} from '@angular/material/menu';
import { CompanyInfoComponent } from '../company-info-component/company-info-component';
import { ViewMeetingsComponent } from '../view-meetings-component/view-meetings-component';
import { MatSelectModule } from '@angular/material/select';
import { QRCodeComponent } from 'angularx-qrcode';
import { GenerateQrCode } from '../generate-qr-code/generate-qr-code';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { ClientService } from '../../clientService';
import { MatBadgeModule } from '@angular/material/badge';

 
@Component({
  selector: 'app-about-company',
  imports: [MatBadgeModule,MatListModule, MatSelectModule, MatButtonModule, RouterOutlet, MatTabsModule , MatMenuModule],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany implements OnInit {
  
  router = inject(Router);
  service = inject(ClientService);
  cdr = inject(ChangeDetectorRef);

  number = 0;

ngOnInit(): void {
      this.service.getComplaints().subscribe({
    next :(resData) => {
      
           this.number = resData.length
           this.cdr.detectChanges()
        
       
         
    }
     
  })
 
  }
   
  

  onSurveys() {
    this.router.navigate(['edit-company/surveys'])
  }

  onUsers() {
     this.router.navigate(['edit-company/users']);
  }

  onMeetings() {
    this.router.navigate(['edit-company/meetings']);
  }

  onCompanyInfo() {
    this.router.navigate(['edit-company']);
  }

  onHome() {
    this.router.navigate(['']);
  }

  onComments(){
    this.router.navigate(['edit-company/comments']);
  }

  get numberOfComents() {
    return  this.number;
  }

  get getCompany() {
    return this.service.company;
  }
}
