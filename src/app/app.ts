import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Surveycomp } from "./components/survey/surveycomp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Surveycomp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
