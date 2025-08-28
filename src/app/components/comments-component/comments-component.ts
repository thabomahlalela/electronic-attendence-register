import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Question } from '../../models/question.model';


@Component({
  selector: 'app-comments-component',
  imports: [MatButtonModule,FormsModule],
  templateUrl: './comments-component.html',
  styleUrl: './comments-component.css'
})
export class CommentsComponent {
  reasons?:Question[];
  click =false;
  

  answer=''
  tittle=''
  question=''
  reason=''

   tittlelength = 0;

   get tittles() {
     return this.tittle
   }

   get questions() {
     return this.question
  }

  submit(){
   this.click = true;


  }

  onSubmit(){

    
    const answering: Question ={
      id:0,
    question:this.answer,
    answers:[this.reason]

  }
  this.reasons?.push(answering)
 


    
   console.log(answering)

   }

  

}
