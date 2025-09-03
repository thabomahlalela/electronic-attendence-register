import { Directive, Input, input } from '@angular/core';
import { Company } from './models/company.models';

@Directive({
  selector: '[appEditCompanyInfo]',
  host : {
    '(click)' : 'onClick($event)'
  }
})
export class EditCompanyInfo {
    @Input() company! : Company

  constructor() {}
  onClick(event : MouseEvent){
    console.log("im clecked" ,this.company);
     const trElement = (event.target as HTMLInputElement)
      const siblings = trElement.parentElement!.children;
      const bigBrother = trElement.previousElementSibling;
      
      // for(let i = 0; i < siblings!.length;i++){
      //   if(siblings[i].tagName.toLowerCase() === 'input'){
      //     console.log("im the input");
      //     return;
      //   }
        
      // }
       const parent = trElement.parentNode;
      const newElement = document.createElement('input')
      newElement.value = trElement.value
      // newElement.style.height = '5px'
      // newElement.style.border = 'none'
      if(trElement.className === "name"){
     
      newElement.style.marginLeft = "4px"
      
      
      }else if(trElement.className === "city"){
           newElement.style.marginLeft = "35px"
             newElement.style.marginTop = "20px"
      
        
      }else if(trElement.className === "sector"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "-180px"
          newElement.style.marginTop = "60px"
      }else if(trElement.className === "address"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "-170px"
          newElement.style.marginTop = "100px"
      }else if(trElement.className === "status"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "10px"
          newElement.style.marginTop = "-3px"
      }else if(trElement.className === "email"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "8px"
          newElement.style.marginTop = "45px"
      }else if(trElement.className === "telNo"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "8px"
          newElement.style.marginTop = "90px"
      }else if(trElement.className === "registrationNo"){
          newElement.style.position = "absolute"
          newElement.style.marginLeft = "59px"
          newElement.style.marginTop = "130px"
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
            if(bigBrother?.textContent === "Name:"){
              console.log("im name")
              this.company.name =  trElement.value

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



            trElement.value = newElement.value
            parent!.replaceChild(trElement,newElement);
                  
              
          }
      
      })
       
       parent!.replaceChild(newElement,trElement);
     
  }

}
