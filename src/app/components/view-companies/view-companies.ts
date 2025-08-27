import { Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-companies',
  imports: [MatButtonModule,MatMenuModule],
  templateUrl: './view-companies.html',
  styleUrl: './view-companies.css'
})
export class ViewCompanies {
  service = inject(ClientService);
  router = inject(Router);

  get myCompanies() {
    return this.service.getCompanies
  }

  onAdd() {
    this.router.navigate(['/register-company'])
  }

  onCompany(){
    this.router.navigate(['/edit-company'])
  }
}
