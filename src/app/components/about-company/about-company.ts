import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CompanyInfoComponent } from '../../company-info-component/company-info-component';

@Component({
  selector: 'app-about-company',
  imports: [MatIcon, MatButtonModule, CompanyInfoComponent],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {

}
