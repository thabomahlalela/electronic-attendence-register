import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import {DUMMY_SURVEY} from '../dummies/dummy-survey';
import {SurveyObj}from '../../models/survey.model'
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ClientService } from '../../clientService';


@Component({
  selector: 'app-survey',
  imports: [ReactiveFormsModule,CommonModule, RouterOutlet],
  templateUrl: './survey.html',
  styleUrl: './survey.css'
})
export class Survey implements OnInit {
    
     private route = inject(ActivatedRoute);
     private clientService = inject(ClientService);
     private survey! : SurveyObj ;
     private fb = inject(FormBuilder);
     private cdr = inject(ChangeDetectorRef);
     form! : FormGroup;
     private id!:number;
     isSubmitted = false;
    ngOnInit(): void {
      this.route.paramMap.subscribe(param => {
        this.id = parseInt(param.get('id')!) ;
        console.log(this.id)
      
      });
      this.clientService.viewSurvey(this.id).subscribe({
        next : (survey)=>{
          this.survey = survey;
          console.log(survey)
           this.form = new FormGroup({
           options : this.fb.array(survey.questions!.map(s =>new FormControl(),Validators.required))

     })
          this.cdr.detectChanges();

        }
      })

    
    }

    get options() : FormArray{
       return this.form.get('options') as FormArray;
     }

     onSubmit(){
      console.log(this.form.value.options[0],this.form.value.options[1],this.form.value.options[2],this.form.value.options[3],this.form.value.options[3])
      
      for(let i =0;i < this.survey.questions!.length;i++){
        // this.surveys.find((s)=>s.id== this.id)!.questions![i].answers = this.form.value.options[i]
        let answers : string[] = []
        answers.push( this.form.value.options[i])
        this.survey.questions![i].answers = answers

        console.log(this.survey.questions![i].question +" Answer " + this.form.value.options[i] )
      }
      console.log(this.survey,"check")
      
      if(this.form.valid) {
        this.clientService.captureSurveyAnswers(this.survey);
        this.isSubmitted = true;
        this.cdr.detectChanges();
      }
        
        
     }

     get getSurvey() {
      return this.survey
     }


}
