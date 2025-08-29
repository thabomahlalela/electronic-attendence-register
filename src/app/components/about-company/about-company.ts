import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { ViewSurveys } from '../../view-surveys/view-surveys';

@Component({
  selector: 'app-about-company',
  imports: [ MatIcon, MatButtonModule, RouterOutlet, ViewSurveys],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {

}
