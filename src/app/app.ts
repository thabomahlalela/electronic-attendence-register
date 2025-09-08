import{Component,signal} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { CustomAdmin } from "./custom-admin/custom-admin";
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomAdmin],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
