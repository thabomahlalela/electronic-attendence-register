import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
 
import { SurveyObj } from '../models/survey.model';
import { DUMMY_SURVEY } from '../components/dummy-survey';

@Component({
  selector: 'app-view-surveys',
  imports: [MatExpansionModule],
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


get getSurvey() {
  return this.data;
}

}
