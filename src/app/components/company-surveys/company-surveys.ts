import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';
import { Question } from '../../models/question.model';
import { SurveyObj } from '../../models/survey.model';
import { CaptureSurvey } from '../capture-survey/capture-survey';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-company-surveys',
  imports: [MatIcon, MatExpansionModule, MatTableModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterOutlet],
  templateUrl: './company-surveys.html',
  styleUrl: './company-surveys.css'
})
export class CompanySurveys {
  
 private _snackBar = inject(MatSnackBar);
 cdr = inject(ChangeDetectorRef);
 private clientService = inject(ClientService);
 readonly dialog = inject(MatDialog);
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
 isUndo = false;
 readonly panelOpenState = signal(false);
 questions! : Question[];
 surveys!:SurveyObj[];
 answers! : string[]
 activeRoute = inject(ActivatedRoute);

 constructor(private route :ActivatedRoute){}

  ngOnInit(): void {
    
    this.clientService.viewSurveys().subscribe({
      next : (s)=>{
         this.surveys= s;
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
    
     
     this.clientService.setClickedSurvey(survey);     
     this.router.navigate(['more-info'],{relativeTo : this.route});

      
  }

  

  onAdd() {
    //  this.isSurveyClicked = false;
    //  this.cdr.detectChanges();
    // this.router.navigate(['add-survey'],{relativeTo : this.route});
    const dialogConfig = new MatDialogConfig();

      dialogConfig.width = '600px'; // Set the desired width

    const dialogRef = this.dialog.open(CaptureSurvey, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
         this.clientService.viewSurveys().subscribe({
      next : (s)=>{
         this.surveys= s;
        console.log(s)
         this.cdr.detectChanges()


      }
    })
      
    });
  }

  

  onQuestion(question:Question) {
    this.isQuesttionClicked = true;
    this.clickedQuestion = question;
    this.clientService.viewAnswers(question.id).subscribe({
      next : (s) => {
        this.answers = s.answers!
        this.cdr.detectChanges();
      }
    })
  }



onDeleteSurvey(survey:SurveyObj) {
   this.surveys = this.surveys.filter((s) => s.id !== survey.id);

  let  snackBarRef =this._snackBar.open(this.message, this.action, {duration:5000});
  
      if(this.isUndo === true) {
        this.isUndo = false;
      }


    snackBarRef.afterDismissed().subscribe(()=> {
      console.log("snackbar dismised");
      if(this.isUndo) {

      } else {
    this.clientService.deleteSurvey(survey);

      }
    });

    snackBarRef.onAction().subscribe(()=>{
       this.surveys.push(survey)
       this.cdr.detectChanges();
       this.isUndo = true;
    });

     
   
}

onRefresh() {
  this.clientService.viewSurveys().subscribe({
      next : (s)=>{
         this.surveys= s;
        console.log(s)
         this.cdr.detectChanges()


      }
    })

}

get getSurvey() {
  return this.surveys;
}

get getClickedSurvey() {
  return this.clickedSurvey
}

get getClickedQuestion() {
  return this.clickedQuestion;
}
  get getQuestion(){
    return this.clientService;
  }

  get getAnswers(){
    return this.answers;
  }
}
