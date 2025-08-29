import{Component,signal} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { Survey } from "./components/survey/survey";
import { AboutCompany } from "./components/about-company/about-company";
import { CaptureSurvey } from './components/capture-survey/capture-survey';
import { CaptureMeeting } from "./components/capture-meeting/capture-meeting";
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutCompany, CaptureSurvey, CaptureMeeting],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
