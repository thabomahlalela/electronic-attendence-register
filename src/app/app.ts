import{Component,signal} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { Survey } from "./components/survey/survey";
import { AboutCompany } from "./components/about-company/about-company";
import { CaptureSurvey } from './components/capture-survey/capture-survey';
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutCompany,CaptureSurvey],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
