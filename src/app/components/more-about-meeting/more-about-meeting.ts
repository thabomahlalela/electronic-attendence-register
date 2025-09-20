import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ClientService } from '../../clientService';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { AttenceRegister } from '../attedance-register/attence-register';
import { ViewAttendances } from '../../view-attendances/view-attendances';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-more-about-meeting',
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterOutlet,
    MatIcon,
    AttenceRegister,
    ViewAttendances,
  ],
  templateUrl: './more-about-meeting.html',
  styleUrl: './more-about-meeting.css',
})
export class MoreAboutMeeting {
  service = inject(ClientService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  location = inject(Location);
  cdr = inject(ChangeDetectorRef);

  onBack() {
    this.service.setIsHomeMeeting(true);
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

  onGenerateQRCode() {
    const id = this.meeting.id;
    const surveyORMeeting = 'MEETING';
    this.router.navigate(['generate-qr-code', `${id}`, `${surveyORMeeting}`], {
      relativeTo: this.activeRoute,
    });
  }

  get meeting() {
    return this.service.meeting;
  }
}
