import { Component,inject } from '@angular/core';

import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-customers-admin-component',
  imports: [RouterOutlet],
  templateUrl: './customers-admin-component.html',
  styleUrl: './customers-admin-component.css'
})
export class CustomersAdminComponent {


   private router = inject(Router);
  
    onAdd(){
      
      // console.log('click me!!!!')
      this.router.navigate(['/custom-admin/view-surveys'])
  
     
    }
  
    addUsers(){
     this.router.navigate(['/custom-admin/view-users'])
      
  
    }
    addMeeting(){
      this.router.navigate(['/custom-admin/view-meetings'])
  
    }
  
  

}
