import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-client-admin-home',
  imports: [MatButtonModule,MatMenuModule,MatIcon,RouterOutlet],
  templateUrl: './client-admin-home.html',
  styleUrl: './client-admin-home.css'
})
export class ClientAdminHome {
router = inject(Router);
service = inject(ClientService);


  onCompanies() {
    this.router.navigate(['/view-companies'])
  }

  onHome() {

  }

  onLogout() {

  }

  get options() {
    return this.service.getOptions
  }
}
