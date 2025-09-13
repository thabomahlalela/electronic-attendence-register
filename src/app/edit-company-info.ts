import { Directive, inject, Input, input } from '@angular/core';
import { Company } from './models/company.models';
import { ClientService } from './clientService';

@Directive({
  selector: '[appEditCompanyInfo]',
  host : {
    '(click)' : 'onClick($event)'
  }
})
export class EditCompanyInfo {
    @Input() company! : Company
    private clientService = inject(ClientService);

  constructor() {}
  onClick(event : MouseEvent){
    console.log("im clecked" ,this.company);
     const trElement = (event.target as HTMLInputElement)
      const siblings = trElement.parentElement!.children;
      const bigBrother = trElement.previousElementSibling;

      console.log(bigBrother?.textContent)
      if(bigBrother?.textContent === ""){
       
               this.company.status =  trElement.textContent;
                console.log("im status ",this.company)
                this.clientService.updateCompany(this.company)
        return;
      }
     
      
      // for(let i = 0; i < siblings!.length;i++){
      //   if(siblings[i].tagName.toLowerCase() === 'input'){
      //     console.log("im the input");
      //     return;
      //   }
        
      // }
       const parent = trElement.parentNode;
      const newElement = document.createElement('input');
      newElement.value = trElement.value;
    
      // newElement.style.height = '5px'
      // newElement.style.border = 'none'
      if(trElement.className === "name"){
      newElement.style.position = "absolute"
      newElement.style.marginLeft = "70px";
      newElement.style.marginTop = "20px";
      
      }else if(trElement.className === "city"){
        newElement.style.position = "absolute"
        newElement.style.marginLeft = "55px"
         newElement.style.marginTop = "260px"
        //  newElement.style.border = 'none'
      
        
      }else if(trElement.className === "sector"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "80px"
          newElement.style.marginTop = "170px"
      }else if(trElement.className === "address"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "520px"
          newElement.style.marginTop = "20px"

      }else if(trElement.className === "status"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "500px"
          newElement.style.marginTop = "260px"

      }else if(trElement.className === "email"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "500px"
          newElement.style.marginTop = "170px"
      }else if(trElement.className === "telNo"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "500px"
          newElement.style.marginTop = "90px"

      }else if(trElement.className === "registrationNo"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "500px"
          newElement.style.marginTop = "90px"
      }

      console.log(bigBrother?.textContent)


       newElement.addEventListener('keydown',(event)=>{
        if (event.key === 'Enter'){
            if(newElement.value === ""){
                newElement.placeholder = 'required'
                newElement.style.background = '#D71313'
                parent!.replaceChild(newElement,trElement);
                return
            }
            trElement.value = newElement.value
            if(bigBrother?.textContent === "Name:"){
              console.log("im name")
              this.company.name = trElement.value
              

            }else if(bigBrother?.textContent === "City:"){
              console.log("im City")
               this.company.city =  trElement.value

            }else if(bigBrother?.textContent === "Sector:"){
              console.log("im sector")
               this.company.sector =  trElement.value
              
            }else if(bigBrother?.textContent === "Address:"){
              console.log("im address")
               this.company.address =  trElement.value
             
            }else if(bigBrother?.textContent === "Status:"){
              console.log("im status")
               this.company.status =  trElement.value
             
             
            }else if(bigBrother?.textContent === "Email:"){
              console.log("im email")
               this.company.email =  trElement.value
             
             
            }else if(bigBrother?.textContent === "TelNo:"){
              console.log("im TelNO")
               this.company.telNo =  trElement.value
              
             
            }



            
             this.clientService.updateCompany(this.company)
            parent!.replaceChild(trElement,newElement);
            
                  
              
          }
      
      })
      

       parent!.replaceChild(newElement,trElement);
     
  }

}
