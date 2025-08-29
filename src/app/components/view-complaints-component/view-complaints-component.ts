import { Component } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-view-complaints-component',
  imports: [],
  templateUrl: './view-complaints-component.html',
  styleUrl: './view-complaints-component.css'
})
export class ViewComplaintsComponent {
   

   newQuestion:Question = {
    id : 0,
    question:"No",
    answers:["I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy","hfyt","I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy",
      "I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy","I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy",
      "I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy","I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy",
      "I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy","I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy",
      "I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy","I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy",
      "I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy","I am not happy not so happy not sooooooooooo happpyyyyyyyyyyyyyyy",
    ]
  };

  get reasons(){
    return this.newQuestion;
  }



}
