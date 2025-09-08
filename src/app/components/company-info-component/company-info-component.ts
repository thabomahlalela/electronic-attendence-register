import { Component, inject } from '@angular/core';
import { Company } from '../../models/company.models';
import { EditCompanyInfo } from '../../edit-company-info';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ClientService } from '../../clientService';

@Component({
  selector: 'app-company-info-component',
  imports: [EditCompanyInfo, MatCardModule, MatButtonModule],
  templateUrl: './company-info-component.html',
  styleUrl: './company-info-component.css'
})
export class CompanyInfoComponent {
  isUpdate = true;
  private clientService = inject(ClientService)

  info:Company = this.clientService.company

  // info:Company ={
  //   id:+12,
  //   name:"Metaware",
  //   city:"Klerksdorp",
  //   registrationNO : "653627",
  //   address:"03 Smollet Street",
  //   sector:"Tech",
  //   email:"metaware@gmail.com",
  //   telNo:"0736457635",
  //   status:"Active",

  // }


  onUpdate() {
    this.isUpdate = false;
  }

}
