import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../clientService';
import { Meeting } from '../../models/meeting.models';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CaptureMeeting } from '../capture-meeting/capture-meeting';

@Component({
  selector: 'app-company-meetings',
  imports: [MatCardModule, MatIcon, MatButtonModule],
  templateUrl: './company-meetings.html',
  styleUrl: './company-meetings.css',
})
export class CompanyMeetings {
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private _snackBar = inject(MatSnackBar);
  isUpcoming = true;
  isOngoing = false;
  isPast = false;
  isUndo = false;

  message = 'meeting deleted';
  action = 'undo';
 readonly dialog = inject(MatDialog);

  private meetings!: Meeting[];
  private clientService = inject(ClientService);
  private upcoming: Meeting[] = [];
  private onGoing: Meeting[] = [];
  private past: Meeting[] = [];
  private today: Meeting[] = [];

  constructor(private route: ActivatedRoute) {
    this.clientService.viewMeetings().subscribe({
      next: (m) => {
        for (let i = 0; i < m.length; i++) {
          if (m[i].status === 'UPCOMING') {
            this.upcoming.push(m[i]);
          }

          if (m[i].status === 'ONGOING') {
            this.onGoing.push(m[i]);
          }

          if (m[i].status === 'TODAY') {
            console.log(m.length);

            this.today.push(m[i]);
          }

          if (m[i].status === 'PAST-MEETING') {
            this.past.push(m[i]);
          }
        }
      },
    });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

      dialogConfig.width = '600px'; // Set the desired width
      // dialogConfig.height = '800px'

    const dialogRef = this.dialog.open(CaptureMeeting, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
           this.clientService.viewMeetings().subscribe({
      next: (m) => {
        for (let i = 0; i < m.length; i++) {
          if (m[i].status === 'UPCOMING') {
            this.upcoming.push(m[i]);
          }

          if (m[i].status === 'ONGOING') {
            this.onGoing.push(m[i]);
          }

          if (m[i].status === 'TODAY') {
            console.log(m.length);

            this.today.push(m[i]);
          }

          if (m[i].status === 'PAST-MEETING') {
            this.past.push(m[i]);
          }
        }
      },
    });
      
    });
  }

  onAdd() {
    // this.router.navigate(['add-meeting'], { relativeTo: this.route });
    // this.router.navigate(['attendace-register'])
  }

  onMeeting(meeting: Meeting) {
    this.isUpcoming = false;
    this.isOngoing = false;
    this.isPast = false;
    this.clientService.setIsHomeMeeting(false);
    this.clientService.setClickedMeeting(meeting);
    this.router.navigate(['meeting'], { relativeTo: this.route });
  }

  onDeleteMeeting(meeting: Meeting) {
    this.meetings = this.meetings.filter((s) => s.id !== meeting.id);

    let snackBarRef = this._snackBar.open(this.message, this.action, { duration: 5000 });

    if (this.isUndo === true) {
      this.isUndo = false;
    }

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('snackbar dismised');

      if (this.isUndo) {
      } else {
        this.clientService.deleteMeeting(meeting);
      }
    });

    snackBarRef.onAction().subscribe(() => {
      this.meetings.push(meeting);
      this.cdr.detectChanges();
      this.isUndo = true;
    });
  }

  onUpComing() {
    if (this.isUpcoming == false) {
      this.isUpcoming = true;
    }

    if (this.isOngoing == true) {
      this.isOngoing = false;
    }

    if (this.isPast == true) {
      this.isPast = false;
    }
  }

  onOnGoing() {
    if (this.isOngoing == false) {
      this.isOngoing = true;
    }

    if (this.isUpcoming == true) {
      this.isUpcoming = false;
    }

    if (this.isPast == true) {
      this.isPast = false;
    }
  }

  onPast() {
    if (this.isPast == false) {
      this.isPast = true;
    }

    if (this.isUpcoming == true) {
      this.isUpcoming = false;
    }

    if (this.isOngoing == true) {
      this.isOngoing = false;
    }
  }

  onQrCode(meeting: Meeting) {
    const id = meeting.id;
    const surveyORMeeting = 'MEETING';
    this.router.navigate(['generate-qr-code', `${id}`, `${surveyORMeeting}`], {
      relativeTo: this.route,
    });
  }

  onViewAttendance(meeting: Meeting) {
    this.clientService.setClickedMeeting(meeting);
    this.router.navigate(['view-attendaces'], { relativeTo: this.route });
  }

  refresh() {
    this.clientService.viewMeetings().subscribe({
      next: (m) => {
        this.meetings = m;
        console.log(m);
        this.cdr.detectChanges();
      },
    });
  }

  get isHome() {
    return this.clientService.isMeetingHome;
  }

  get getMeetings() {
    return this.meetings;
  }

  get todayMeetings() {
    return this.today;
  }

  get ongoingMeetings() {
    return this.onGoing;
  }

  get upcomingMeetings() {
    return this.upcoming;
  }

  get pastMeetings() {
    return this.past;
  }
}
