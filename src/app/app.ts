import{Component,signal} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { AboutCompany } from "./components/about-company/about-company";
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutCompany],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
