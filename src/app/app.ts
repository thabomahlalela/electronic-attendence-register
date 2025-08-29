import{Component,signal} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { Survey } from "./components/survey/survey";
import { AboutCompany } from "./components/about-company/about-company";
import { CompanyInfoComponent } from './components/company-info-component/company-info-component';
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
