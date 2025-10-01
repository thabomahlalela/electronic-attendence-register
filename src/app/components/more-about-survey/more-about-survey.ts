import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SurveyObj } from '../../models/survey.model';
import { ClientService } from '../../clientService';
import { Question } from '../../models/question.model';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-more-about-survey',
  imports: [MatCardModule, MatExpansionModule, MatButtonModule, RouterOutlet],
  templateUrl: './more-about-survey.html',
  styleUrl: './more-about-survey.css'
})
export class MoreAboutSurvey implements OnInit{
  
 private router = inject(Router);
route = inject(ActivatedRoute);
servive = inject(ClientService);
questions! : Question[];
question!:Question;
answers!:string[];
clickedQuestion!:Question;
cdr = inject(ChangeDetectorRef)

survey!:SurveyObj;
id!:number;
 readonly panelOpenState = signal(false);

   ngOnInit(): void {
      this.servive.viewQuestions().subscribe((s) =>{
        this.questions = s;
        console.log(s[0].answers)
     this.cdr.detectChanges();

      })
  }

  onGenerateQRCode() {
     
    this.cdr.detectChanges();
    const id = this.servive.survey.id;
    const surveyORMeeting = "SURVEY";
     
    // this.url.emit('/survey');
    console.log('emit')
    this.router.navigate(['generate-qr-code', `${id}`, `${surveyORMeeting}`],{relativeTo : this.route});

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
