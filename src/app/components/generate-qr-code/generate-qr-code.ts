import { ChangeDetectorRef, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { interval } from 'rxjs';


@Component({
  selector: 'app-generate-qr-code',
  imports: [QRCodeComponent, MatButton, FormsModule],
  templateUrl: './generate-qr-code.html',
  styleUrl: './generate-qr-code.css'
})
export class GenerateQrCode implements OnInit {
  
route = inject(ActivatedRoute);
cdr = inject(ChangeDetectorRef);
router = inject(Router);
title!:string;
surveyORMeeting!:string;
incomingURL ='';
url ='url';
isLoading = false;
isGenerate = true;
destroy = inject(DestroyRef);

 
ngOnInit(): void {

        this.route.paramMap.subscribe(param => {
        this.title = param.get('title')!;
        this.surveyORMeeting = param.get('surveyORMeeting')!;
        
          
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
            this.url = '/attendece-register';
          } else {
            this.url = 'http://localhost:4200/edit-company/surveys';
          }
  }

  onView() {
    
  }


  get getIsloading() {
    return this.isLoading;
  }

 
}
