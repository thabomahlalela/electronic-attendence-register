import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyObj } from '../models/survey.model';
import { ClientService } from '../clientService';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-more-about-survey',
  imports: [],
  templateUrl: './more-about-survey.html',
  styleUrl: './more-about-survey.css'
})
export class MoreAboutSurvey implements OnInit {

route = inject(ActivatedRoute);
servive = inject(ClientService);
questions! : Question[];
question!:Question;
answers!:string[];
clickedQuestion!:Question;
cdr = inject(ChangeDetectorRef)

survey!:SurveyObj;
id!:number;

  ngOnInit(): void {
        
   this.servive.viewQuestions().subscribe({
      next:(q) => {
        this.questions = q
        this.cdr.detectChanges();
      }
      
    });
     
    console.log(this.survey.title)
    
}

onQuestion(question:Question) {
  
 this.question = question;
 this.servive.viewAnswers(this.question.id).subscribe((s) =>{
     this.answers = s.answers!
     this.cdr.detectChanges();
  });
      
}


get getQuestions() {
  
return this.questions;
}

get getSurvey() {
  return this.servive.survey;
}

get getAnswers() {
  return this.answers;
}
}
