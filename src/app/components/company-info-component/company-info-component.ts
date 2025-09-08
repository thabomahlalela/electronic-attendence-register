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

info:Company =this.clientService.company

 


  onUpdate() {
    this.isUpdate = false;
  }

}
