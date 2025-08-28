import { Component, inject, OnInit } from '@angular/core';
import {DUMMY_SURVEY} from '../dummy-survey';
import {SurveyObj}from '../../models/survey.model'
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-survey',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './survey.html',
  styleUrl: './survey.css'
})
export class Survey implements OnInit {
    
    survey : SurveyObj  = DUMMY_SURVEY;
    private fb = inject(FormBuilder);;
    form! : FormGroup;

    ngOnInit(): void {
     this.form = new FormGroup({
         options : this.fb.array(this.survey.question!.map(s =>new FormControl(),Validators.required))
     })
    }

    get options() : FormArray{
       return this.form.get('options') as FormArray;
     }

     onSubmit(){
      console.log(this.form.value.options[0],this.form.value.options[1],this.form.value.options[2],this.form.value.options[3],this.form.value.options[3])

      for(let i =0;i < this.survey.question!.length;i++){
        this.survey.question![i].answers = this.form.value.options[i]
        console.log(  this.survey.question![i].question +" Answer " + this.form.value.options[i] )
      }

      console.log(this.survey.question)
      console.log()
     }


}
