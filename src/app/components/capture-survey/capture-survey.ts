import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/question.model';
import { ClientService } from '../../clientService';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-capture-survey',
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './capture-survey.html',
  styleUrl: './capture-survey.css'
})
export class CaptureSurvey {
  questions : Question[] = []
  
  constructor(private clientService : ClientService){}

  
  
  form = new FormGroup({
    title : new FormControl(''),
    description :new FormControl(''),
    question : new FormControl('')    
    
  })


  addClick(){
    this.questions.push({question:this.form.value.question!})!
    console.log(this.questions)
   
  }


captureSurvey() :void{
 this.clientService.captureSurvey({
  title :this.form.value.title,
  description :this.form.value.description!,
  question : this.questions
    
  })

  // console.log(this.form.value.title)
  console.log(this.form.value)
  


}



}
