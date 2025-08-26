import{Component,signal} from '@angular/core'
import { ViewCompanies } from './components/view-companies/view-companies';
import { RouterOutlet } from '@angular/router';
 

@Component({
  selector: 'app-root',
  imports: [ViewCompanies,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
