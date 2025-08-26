import { Component, signal } from '@angular/core';
import { CompanyRegistrationForm } from './components/company-registration-form/company-registration-form';

@Component({
  selector: 'app-root',
  imports: [CompanyRegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
