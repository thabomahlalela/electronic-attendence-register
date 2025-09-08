import { Component, inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-custom-admin',
  imports: [RouterOutlet],
  templateUrl: './custom-admin.html',
  styleUrl: './custom-admin.css'
})
export class CustomAdmin {
  private router = inject(Router);

  onAdd(){
    this.router.navigate(['/custom-admin/view-surveys'])
   
  }

  addUsers(){
    this.router.navigate(['/custom-admin/view-users'])
    

  }
  addMeeting(){
    this.router.navigate(['/custom-admin/view-meetings'])

  }







}
