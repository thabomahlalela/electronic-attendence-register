import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Question } from '../../models/question.model';
import { ClientService } from '../../clientService';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-comments-component',
  imports: [MatButtonModule,FormsModule,MatIcon],
  templateUrl: './comments-component.html',
  styleUrl: './comments-component.css'
})
export class CommentsComponent {

  constructor( private dataService:ClientService){

  }
  reasons?:Question[];
  click =false;
  

  answer=''
  reason=''

   

   

  

  onSubmit(){
    this.dataService.comments({
      id:0,
      question:this.answer,
      answers:[
        this.reason
        

      ]
    }


    )
  
   }
  
    
  submits(answers:string){
    this.answer = answers
    console.log(this.answer)

  }

   

  

}
