import { Component } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-view-compliments-component',
  imports: [],
  templateUrl: './view-compliments-component.html',
  styleUrl: './view-compliments-component.css'
})
export class ViewComplimentsComponent {
  newQuestion:Question = {
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
