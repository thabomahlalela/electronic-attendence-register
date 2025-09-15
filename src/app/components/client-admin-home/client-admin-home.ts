import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';
import { MatIcon } from '@angular/material/icon';
import { Survey } from "../survey/survey";
import { MatCard } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Company } from '../../models/company.models';
import { I } from '@angular/cdk/keycodes';

 
@Component({
  selector: 'app-client-admin-home',
  imports: [MatButtonModule, MatMenuModule, MatIcon, RouterOutlet,MatCard,MatProgressBarModule],
  templateUrl: './client-admin-home.html',
  styleUrl: './client-admin-home.css'
})
export class ClientAdminHome implements OnInit {
 
router = inject(Router);
service = inject(ClientService);
private cdr = inject(ChangeDetectorRef);
click=true;


 ngOnInit(): void {
    //  this.service.login().subscribe({
    //    next: (s)=>{
    //     console.log(s.person)
    //      console.log(s.roles)
    //      console.log(s.person.company)
    //      console.log(s.token)

         
    //    }
    //  })
  }


  onCompanies() {
    this.router.navigate(['/client-admin-home/view-companies']);
    this.click=false;
  }

  onSetings() {
    this.router.navigate(['/client-admin-home/credentials']);

  }



  onHome() {
    this.router.navigate(['/client-admin-home']);

  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  get options() {
    return this.service.getOptions
  }



  
}
