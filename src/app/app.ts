import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
 import { ClientAdminHome } from './components/client-admin-home/client-admin-home';
import { CommentsComponent } from './components/comments-component/comments-component';
import { ViewComplaintsComponent } from './components/view-complaints-component/view-complaints-component';
import { ViewComplimentsComponent } from './components/view-compliments-component/view-compliments-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClientAdminHome,CommentsComponent,ViewComplaintsComponent,ViewComplimentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');
}
