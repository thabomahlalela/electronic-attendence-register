import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Question } from '../../models/question.model';
import { ClientService } from '../../clientService';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments-component',
  imports: [MatButtonModule,FormsModule,MatIcon],
  templateUrl: './comments-component.html',
  styleUrl: './comments-component.css'
})
export class CommentsComponent {

 private route = inject(ActivatedRoute);
 private id! : number

  constructor( private dataService:ClientService){

  }

  ngOnInit(): void {

        this.route.paramMap.subscribe(param => {
        this.id = parseInt(param.get('id')!) ;
       
        console.log(this.id)
      });
      
      
  }
  reasons?:Question[];
  click =false;
  

  answer=''
  reason=''

   

   

  

  onSubmit(){
    this.dataService.comments({
      id:this.id,
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
