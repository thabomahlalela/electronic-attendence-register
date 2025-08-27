import { Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-view-companies',
  imports: [MatButtonModule,MatMenuModule],
  templateUrl: './view-companies.html',
  styleUrl: './view-companies.css'
})
export class ViewCompanies {
  service = inject(ClientService);

  get myCompanies() {
    return this.service.getCompanies
  }
}
