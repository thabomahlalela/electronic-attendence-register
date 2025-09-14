import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/question.model';
import { ClientService } from '../../clientService';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { filter } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-capture-survey',
  imports: [ReactiveFormsModule, MatInputModule, FormsModule, MatIcon, MatButtonModule],
  templateUrl: './capture-survey.html',
  styleUrl: './capture-survey.css'
})
export class CaptureSurvey {
  private router = inject(Router)
  questions : Question[] = []
  que! :[{text:''}]
quee!: Question;


 

  
  constructor(private clientService : ClientService,private route :ActivatedRoute){}

  
  
  form = new FormGroup({
     title: new FormControl('', Validators.required),
     description: new FormControl('',Validators.required ),
     
  })
  form1 = new FormGroup({
  
     question: new FormControl('',Validators.required),
     
  })


  addClick(){

   
    this.questions.push({
      id : 0,
      question : this.form1.value.question!,
    })!

    // console.log(this.form.value.question)
   
  }


captureSurvey() :void{
 this.clientService.captureSurvey({
  id:0,
  title:this.form.value.title!,
  description :this.form.value.description!,
  questions : this.questions
    
  })
     
    this.router.navigate(['../'],{relativeTo : this.route})
    console.log(this.form.value)


}

 get question(): Question[]{
    return this.questions;
  }

  deleteQuetion(quee:Question){
    console.log(quee)
   const data = this.questions.filter((s) => s.question !== quee.question);
   this.questions = data;
   
  //  for(let i= 0; i <data.length ;i++){
  //   console.log(data[i].question)

  //  }

   
    
  }









   

  





}
