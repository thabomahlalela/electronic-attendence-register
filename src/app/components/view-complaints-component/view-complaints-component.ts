import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';
import { ClientService } from '../../clientService';
import { T } from '@angular/cdk/keycodes';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-view-complaints-component',
  imports: [MatButtonModule,MatIcon],
  templateUrl: './view-complaints-component.html',
  styleUrl: './view-complaints-component.css'
})
export class ViewComplaintsComponent implements OnInit{
   
newQuestion!:Question[]
question!:Question[]

constructor(private dataService : ClientService){

}

ngOnInit():  void{
  this.dataService.getComplaints().subscribe({
    next :(resData) => {
      
           this.newQuestion = resData
        
       
        console.log(this.newQuestion)
  
    }
     
  })
 
  
}

  get reasons(){
    
    return this.newQuestion;
  }

  onSubmit(numbers:number){
    this.newQuestion = this.newQuestion.filter(item => item.id !== numbers)
    
     
     
    console.log(this.newQuestion)
    this.dataService.deleteComplaints(numbers)

  }



 






}
