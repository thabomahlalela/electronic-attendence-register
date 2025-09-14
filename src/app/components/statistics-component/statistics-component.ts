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
totalNumberOfCompanies =0;
numberOfActiveCompanies =0;
techPercent=0;
healthPercent =0;
retailPercent=0;
otherPercent=0;
financePercent=0;
tech:Company[]=[];
finance:Company[]=[];
other:Company[]=[];
health:Company[]=[];
retail:Company[]=[];
sectors:Company[]=[];

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
              
            this.totalNumberOfCompanies = s.length
            console.log(this.totalNumberOfCompanies);
            this.cdr.detectChanges();
             for(let i = 0; s.length > 0; i++){

             if(s[i].status==="ACTIVE") {
              this.numberOfActiveCompanies += 1;
              this.cdr.detectChanges();
             }
              
                 if(s[i].sector === 'Technology'){
                  
                   this.tech.push(s[i]);
                   this.techPercent = Math.ceil((this.tech.length / this.totalNumberOfCompanies) * 100) ;
                  //  this.techPercent =parseInt(((this.tech.length / this.totalNumberOfCompanies) * 100).toFixed(0))  ;
                   this.cdr.detectChanges();
                  //  console.log(this.techPercent + "%");
                }



                if(s[i].sector === 'Health'){
                   this.health.push(s[i]);
                   this.healthPercent =Math.ceil( (this.health.length / this.totalNumberOfCompanies) * 100);
                   this.cdr.detectChanges();
                  //  console.log(this.healthPercent + "%");
                }
                if(s[i].sector === 'Retail'){
                  this.retail.push(s[i]);
                  this.retailPercent =Math.floor((this.retail.length / this.totalNumberOfCompanies) * 100) ;
                  this.cdr.detectChanges();
                  //  console.log(this.retailPercent + "%");
                }

                if(s[i].sector !== 'Technology' && s[i].sector !== 'Retail' && s[i].sector !== 'Finance' && s[i].sector !== 'Health'){
                  this.other.push(s[i]);
                  this.otherPercent =Math.ceil((this.other.length / this.totalNumberOfCompanies) * 100);
                  this.cdr.detectChanges();
                   console.log(this.otherPercent + "%");
                }

                if(s[i].sector === 'Finance'){
                  this.finance.push(s[i]);
                  this.financePercent =Math.ceil(((this.finance.length / this.totalNumberOfCompanies) * 100));
                  this.cdr.detectChanges();
                  // console.log(this.financePercent + "%");
                }
                
              }
               
              
              
              
            } 
             
            
          
        })
        

         console.log(this.tech ,this.health,this.other,this.finance,this.retail,this.sectors)
        
  }
}













