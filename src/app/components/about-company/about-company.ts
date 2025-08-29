import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CompanyInfoComponent } from '../company-info-component/company-info-component';
import { ViewUsers } from '../view-users/view-users';
import { ViewMeetingsComponent } from "../view-meetings-component/view-meetings-component";

@Component({
  selector: 'app-about-company',
  imports: [MatIcon, MatButtonModule, CompanyInfoComponent, ViewUsers, ViewMeetingsComponent],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {

}
