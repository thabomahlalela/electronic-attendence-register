import { Component, inject, OnInit } from '@angular/core';
import {DUMMY_SURVEY} from '../dummies/dummy-survey';
import {SurveyObj}from '../../models/survey.model'
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../clientService';


@Component({
  selector: 'app-survey',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './survey.html',
  styleUrl: './survey.css'
})
export class Survey implements OnInit {
    
     private route = inject(ActivatedRoute);
     private clientService = inject(ClientService);
     private surveys : SurveyObj[]  = DUMMY_SURVEY;
     private fb = inject(FormBuilder);;
     form! : FormGroup;
     private id!:number;

    ngOnInit(): void {
      this.route.paramMap.subscribe(param => {
        this.id = parseInt(param.get('id')!) ;
        console.log(this.id)
      
      });
     this.form = new FormGroup({
         options : this.fb.array(this.surveys.find((s)=>s.id==this.id)!.questions!.map(s =>new FormControl(),Validators.required))

     })
    }

    get options() : FormArray{
       return this.form.get('options') as FormArray;
     }

     onSubmit(){
      console.log(this.form.value.options[0],this.form.value.options[1],this.form.value.options[2],this.form.value.options[3],this.form.value.options[3])
      
      for(let i =0;i < this.surveys.find((s)=>s.id== this.id)!.questions!.length;i++){
        // this.surveys.find((s)=>s.id== this.id)!.questions![i].answers = this.form.value.options[i]
        let answers : string[] = []
        answers.push( this.form.value.options[i])
        this.surveys.find((s)=>s.id== this.id)!.questions![i].answers = answers

        console.log(this.surveys.find((s)=>s.id== this.id)!.questions![i].question +" Answer " + this.form.value.options[i] )
      }
      console.log(this.surveys.find((s)=>s.id== this.id),"check")
      
      if(this.form.valid) {
        this.clientService.captureSurveyAnswers(this.surveys.find((s)=>s.id== this.id)!);
      }
        
     }

     get survey() {
      return this.surveys.find((s)=>s.id== this.id)
     }


}
