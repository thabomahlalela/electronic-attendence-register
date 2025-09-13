import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClientService } from '../../clientService';
import { Router } from '@angular/router';
import { Company } from '../../models/company.models';


@Component({
  selector: 'app-statistics-component',
  imports: [MatButtonModule, MatMenuModule, MatIcon,MatCard,MatProgressBarModule],
  templateUrl: './statistics-component.html',
  styleUrl: './statistics-component.css'
})
export class StatisticsComponent {




router = inject(Router);
service = inject(ClientService);
private cdr = inject(ChangeDetectorRef);
click=true;

tech:Company[]=[];
finance:Company[]=[];
other:Company[]=[];
health:Company[]=[];
retail:Company[]=[];

sectors:Company[]=[];



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
        
            next : (s)=>{ this.sectors = s
              
              
              
             for(let i = 0; s.length > 0; i++){

             
              
                 if(s[i].sector === 'Technology'){
                  
                   this.tech.push(s[i])
                }



                if(s[i].sector === 'Health'){
                  this.health.push(s[i])
                }
                if(s[i].sector === 'Retail'){
                  this.retail.push(s[i])
                }

                if(s[i].sector !== 'Technology' && s[i].sector !== 'Retail' && s[i].sector !== 'Finance' && s[i].sector !== 'Health'){
                  this.other.push(s[i])
                }

                if(s[i].sector === 'Finance'){
                  this.finance.push(s[i])
                }
                
              }
              this.cdr.detectChanges()
              
              
              
            } 
             
            
          
        })
        

         console.log(this.tech ,this.health,this.other,this.finance,this.retail,this.sectors)
        
  }
}













