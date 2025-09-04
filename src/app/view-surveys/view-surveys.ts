import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
 
 import { DUMMY_SURVEY } from '../components/dummies/dummy-survey';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SurveyObj } from '../models/survey.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Question } from '../models/question.model';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-surveys',
  imports: [MatIcon, MatExpansionModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterOutlet],
  templateUrl: './view-surveys.html',
  styleUrl: './view-surveys.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSurveys implements OnInit {
  @Output() url = new EventEmitter();
 private _snackBar = inject(MatSnackBar);
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

  ngOnInit(): void {
    

}

onList() {
    this.viewList = true;
  }

  onSurvey(survey:SurveyObj) {
    this.isSurveyClicked = true;
     
    this.clickedSurvey = survey;

     this.router.navigate(['/edit-company/surveys']);
  }

  

  onAdd() {
     this.isSurveyClicked = false;
    this.router.navigate(['/edit-company/surveys/add-survey']);
  }

  onGenerateQRCode(survey:SurveyObj) {
    this.isSurveyClicked = false;
    const title = survey.title
    // this.url.emit('/survey');
    console.log('emit')
    this.router.navigate(['/edit-company/surveys/generate-qr-code',  `${title}`]);

  }

  onQuestion(question:Question) {
    this.isQuesttionClicked = true;
    this.clickedQuestion = question;
  }



onDeleteSurvey(survey:SurveyObj) {
  let a = this.data.filter((s)=>s.title !== survey.title);
  this.data = a;
  
   

  let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});

    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised")
    });

    snackBarRef.onAction().subscribe(()=>{
       this.data.push(survey)
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
}
