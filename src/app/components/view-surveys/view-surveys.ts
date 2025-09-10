import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
 
 import { DUMMY_SURVEY } from '../dummies/dummy-survey';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SurveyObj } from '../../models/survey.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Question } from '../../models/question.model';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';

@Component({
  selector: 'app-view-surveys',
  imports: [MatIcon, MatExpansionModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterOutlet],
  templateUrl: './view-surveys.html',
  styleUrl: './view-surveys.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSurveys implements OnInit {
  
 private _snackBar = inject(MatSnackBar);
 cdr = inject(ChangeDetectorRef);
 private clientService = inject(ClientService)
 private router = inject(Router);
 message = 'survey deleted';
 action ='undo';
 viewList = false;
 clickedSurvey!:SurveyObj;
 clickedQuestion!:Question;
 isSurveyClicked=false;
 isGenerateQrCode = false;
 isAddSurvey = false;
 isQuesttionClicked = false;
 readonly panelOpenState = signal(false);
 data = DUMMY_SURVEY;
 questions! : Question[]
 answers! : string[]

 constructor(private route :ActivatedRoute){}

  ngOnInit(): void {
    
    this.clientService.viewSurvey().subscribe({
      next : (s)=>{
        this.data = s
        console.log(s)
         this.cdr.detectChanges()


      }
    })

    
}

onList() {
    this.viewList = true;
  }

  onSurvey(survey:SurveyObj) {
    this.isSurveyClicked = true;
     
    this.clickedSurvey = survey;
     this.cdr.detectChanges()
     this.clientService.setClickedSurvey(survey);
    this.clientService.viewQuestions().subscribe({
      next:(q) => {
        this.questions = q
        this.cdr.detectChanges()
      }
      
    })

     this.router.navigate(['surveys'],{relativeTo : this.route});
  }

  

  onAdd() {
     this.isSurveyClicked = false;
    this.router.navigate(['add-survey'],{relativeTo : this.route});
  }

  onGenerateQRCode(survey:SurveyObj) {
    this.isSurveyClicked = false;
    const id = survey.id;
    const surveyORMeeting = "SURVEY";
     
    // this.url.emit('/survey');
    console.log('emit')
    this.router.navigate(['generate-qr-code', `${id}`, `${surveyORMeeting}`],{relativeTo : this.route});

  }

  onQuestion(question:Question) {
    this.isQuesttionClicked = true;
    this.clickedQuestion = question;
    this.clientService.viewAnswers(question.id).subscribe({
      next : (s) => {
        this.answers = s.answers!
      }
    })
  }



onDeleteSurvey(survey:SurveyObj) {
  let a = this.data.filter((s)=>s.title !== survey.title);
  this.data = a;

  let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});

    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised")
    });

    snackBarRef.onAction().subscribe(()=>{
       this.data.push(survey);
       this.cdr.detectChanges();
    })
     
   
}

onRefresh() {
  this.clientService.viewSurvey().subscribe({
      next : (s)=>{
        this.data = s
        console.log(s)
         this.cdr.detectChanges()


      }
    })

}

get getSurvey() {
  return this.data;
}

get getClickedSurvey() {
  return this.clickedSurvey
}

get getClickedQuestion() {
  return this.clickedQuestion;
}
  get getQuestion(){
    return this.questions;
  }

  get getAnswers(){
    return this.answers;
  }
}
