import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientAdminHome } from './components/client-admin-home/client-admin-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClientAdminHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
