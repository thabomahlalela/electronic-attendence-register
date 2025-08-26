import { Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';

@Component({
  selector: 'app-view-companies',
  imports: [],
  templateUrl: './view-companies.html',
  styleUrl: './view-companies.css'
})
export class ViewCompanies {
  service = inject(ClientService);

  get myCompanies() {
    return this.service.getCompanies
  }
}
