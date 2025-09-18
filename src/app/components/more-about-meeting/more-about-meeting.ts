import { Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-more-about-meeting',
  imports: [MatCardModule],
  templateUrl: './more-about-meeting.html',
  styleUrl: './more-about-meeting.css'
})
export class MoreAboutMeeting {
  service = inject(ClientService);


  get meeting() {
    return this.service.meeting;
  }

}
