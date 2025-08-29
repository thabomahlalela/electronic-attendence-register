import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { ViewSurveys } from '../../view-surveys/view-surveys';
import { ViewUsers } from "../view-users/view-users";


import {MatMenuModule} from '@angular/material/menu';
import { CompanyInfoComponent } from '../company-info-component/company-info-component';
import { ViewMeetingsComponent } from '../view-meetings-component/view-meetings-component';

 
@Component({
  selector: 'app-about-company',
  imports: [MatIcon, MatButtonModule,RouterOutlet, ViewSurveys,CompanyInfoComponent, ViewUsers, MatMenuModule, ViewMeetingsComponent],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {

}
