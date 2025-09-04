import { Component, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { ViewSurveys } from '../../view-surveys/view-surveys';
import { ViewUsers } from "../view-users/view-users";


import {MatMenuModule} from '@angular/material/menu';
import { CompanyInfoComponent } from '../company-info-component/company-info-component';
import { ViewMeetingsComponent } from '../view-meetings-component/view-meetings-component';
import { MatSelectModule } from '@angular/material/select';
import { QRCodeComponent } from 'angularx-qrcode';
import { GenerateQrCode } from '../generate-qr-code/generate-qr-code';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

 
@Component({
  selector: 'app-about-company',
  imports: [MatListModule, MatSelectModule, MatButtonModule, RouterOutlet, MatTabsModule , MatMenuModule],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {
  router = inject(Router);
  

  onSurveys() {
    this.router.navigate(['edit-company/surveys'])
  }

  onUsers() {
     this.router.navigate(['edit-company/users']);
  }
}
