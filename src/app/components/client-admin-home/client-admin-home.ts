import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-client-admin-home',
  imports: [MatButtonModule,MatMenuModule],
  templateUrl: './client-admin-home.html',
  styleUrl: './client-admin-home.css'
})
export class ClientAdminHome {

}
