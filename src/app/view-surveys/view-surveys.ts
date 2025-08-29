import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
 
 import { DUMMY_SURVEY } from '../components/dummies/dummy-survey';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SurveyObj } from '../models/survey.model';

@Component({
  selector: 'app-view-surveys',
  imports: [MatExpansionModule, MatIcon, MatButtonModule],
  templateUrl: './view-surveys.html',
  styleUrl: './view-surveys.css',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSurveys implements OnInit {
[x: string]: any;


 readonly panelOpenState = signal(false);
 data = DUMMY_SURVEY;

  ngOnInit(): void {
    

}


onDeleteSurvey(survey:SurveyObj) {
  let a = this.data.filter((s)=>s.title !== survey.title);
  this.data = a;
  
  for(let i = 0; i < this.data.length;i++) {
    console.log(this.data[i].title)
  }
   
}

get getSurvey() {
  return this.data;
}

}
