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

tech!:Company[];
finance!:Company[];
other!:Company[];
health!:Company[];
retail!:Company[];

sector!:String[];



  onCompanies() {
    this.router.navigate(['/view-companies'])
    this.click=false;
  }



  onHome() {

  }

  onLogout() {

  }

  get options() {
    return this.service.getOptions
  }



  industries = [
    {
      name:'Technology',
      value:45,
      color:'primary'
    },
{
      name:'Finance',
      value:25,
      color:'accent'
    },


{
      name:'Healthcare',
      value:15,
      color:'warn'
    },
    {
      name:'Retail',
      value:10,
      color:'red'
    },

    {
      name:'other',
      value:45,
      color:'blue'
    },

  ]


  ngOnInit(): void {
     this.service.viewCompanies().subscribe({
        
            next : (s)=>{
              console.log(s)
              
             for(let i = 0; s.length > 0; i++){

              this.sector.push(s[i].sector)
              
              console.log(s[i].sector)
              
                // if(s[i].sector.){
                  
                //   this.tech.push(s[i])
                // }
                // if(s[i].sector === 'Health'){
                //   this.health.push(s[i])
                // }
                // if(s[i].sector === 'Retail'){
                //   this.retail.push(s[i])
                // }

                // if(s[i].sector !== 'Other'){
                //   this.other.push(s[i])
                // }

                // if(s[i].sector === 'Finance'){
                //   this.finance.push(s[i])
                // }
              }
              
              // this.cdr.detectChanges()
              
            } 
            
          
        })
        // console.log(this.sector)
        
  }
}
