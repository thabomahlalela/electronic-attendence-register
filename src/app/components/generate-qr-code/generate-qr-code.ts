import { ChangeDetectorRef, Component, DestroyRef, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
 


@Component({
  selector: 'app-generate-qr-code',
  imports: [QRCodeComponent, MatButton, FormsModule, MatIcon, MatButtonModule],
  templateUrl: './generate-qr-code.html',
  styleUrl: './generate-qr-code.css'
})
export class GenerateQrCode implements OnInit {
  
route = inject(ActivatedRoute);
cdr = inject(ChangeDetectorRef);
router = inject(Router);
id!:number;
surveyORMeeting!:string;
incomingURL ='';
url ='url';
isLoading = false;
isGenerate = true;
destroy = inject(DestroyRef);
 @ViewChild('qrcodeContainer', { static: false }) qrcodeContainer!: ElementRef;

 
ngOnInit(): void {

        this.route.paramMap.subscribe(param => {
        this.id = parseInt(param.get('id')!) ;
        this.surveyORMeeting = param.get('surveyORMeeting')!;

        console.log(this.id)
      });
      
      
  }

  onGenerate() {
     this.isLoading=true;
     this.isGenerate = false;
        setTimeout(()=> {
     this.isLoading=!this.isLoading;
     this.cdr.detectChanges()
     console.log(this.isLoading)
        },5000)  



        if(this.surveyORMeeting === "MEETING") {
            this.url = `http://localhost:4200/attendace-register/${this.id}`;
          } else {
            this.url = `http://localhost:4200/survey/${this.id}`;
          }
  }

  onView() {
    
  }

  onDownload() {
    const canvas = this.qrcodeContainer.nativeElement.querySelector('canvas');
    const url = canvas.toDataURL('image/png');

    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.png';
    a.click();
  }


  get getIsloading() {
    return this.isLoading;
  }

 
}
