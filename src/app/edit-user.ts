import { Directive, HostListener, Input} from '@angular/core';
import { DUMMY_USERS } from './components/dummies/dummy-user';

@Directive({
  selector: '[appEditUser]',
  standalone : true,
   host :{
    '(click)' : 'onClick($event)',
    
    
  }
})

export class EditUser {
  @Input() empNO! : string;
  private users = DUMMY_USERS;
   private cellIndex! : number;
   private columnName = '';

  constructor() {
    console.log("edit user activated")
   }


  
  onClick(event : MouseEvent){
    let element = event.target as HTMLElement

    console.log("im clicked",element.tagName === 'TD')
    if(element.tagName === 'TD'){
         const trElement = (event.target as HTMLTableCellElement)
      const siblings = trElement.parentElement!.children
      for(let i = 0; i < siblings!.length;i++){
        if(siblings[i].tagName.toLowerCase() === 'input'){
          console.log("im the input");
          return;
        }
      }

       

      if(siblings){
        this.cellIndex = Array.from(siblings).indexOf(trElement)
      console.log("my index",this.cellIndex)

      }

      
      
      const table = trElement.closest('table')

      if(table){
        console.log("step1")
        const thead = table.querySelector('thead')
        if(thead){
           console.log("step2")
          const hearderTh = thead.querySelectorAll('th')[this.cellIndex] 
          if(hearderTh){
            console.log("step3")
            console.log(hearderTh.textContent)
            this.columnName = hearderTh.textContent + ""
          }
        }
      }


      console.log(trElement.textContent)
      console.log(this.columnName + " im column")

      const parent = trElement.parentNode;
      const newElement = document.createElement('input')
      newElement.id = "newElement"
      newElement.value = trElement.textContent + ""
      newElement.style.position = 'relative'
      newElement.style.marginTop = '30px'
      newElement.style.width = '70px'
      if(this.columnName === 'Date'){
        console.log('check im date ')
        newElement.type = "date";
      }
       if(this.columnName === 'Amount'){
        console.log('check im TIME')
        newElement.type = "number";
      }
      newElement.addEventListener('keydown',(event)=>{
        if (event.key === 'Enter'){
          if(newElement.value === ""){
             newElement.placeholder = 'required'
            // newElement.style.background = 'red'
             parent!.replaceChild(newElement,trElement);
            return
          }
          console.log("input Enter is pressed")
          console.log(newElement.value);

          trElement.textContent = newElement.value
          let user = this.users.find((s)=>s.employNO === this.empNO)
          console.log(user?.surname)

          if(user){
            if(this.columnName === "Name"){
              user.name =trElement.textContent
            }
             if(this.columnName === "Surname"){
              user.surname =trElement.textContent
            }
             if(this.columnName === "Email"){
              user.email =trElement.textContent
            }

            console.log(user)
            
          }


          parent!.replaceChild(trElement,newElement);
         

             

        }
         
      
      })
      parent!.replaceChild(newElement,trElement);
    }else{
    this.users = this.users.filter((s)=>s.employNO !== this.empNO)
    console.log(this.users)
    }
    
  }
    // onEnter(event : KeyboardEvent){}

}
