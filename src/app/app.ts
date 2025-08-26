import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyRegistrationForm } from './components/company-registration-form/company-registration-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CompanyRegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
