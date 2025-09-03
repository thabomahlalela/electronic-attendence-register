import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';
import { interval } from 'rxjs';


@Component({
  selector: 'app-generate-qr-code',
  imports: [QRCodeComponent, MatButton],
  templateUrl: './generate-qr-code.html',
  styleUrl: './generate-qr-code.css'
})
export class GenerateQrCode implements OnInit {
  

route = inject(ActivatedRoute);
title!:string;
url =''
isLoading = true;
destroy = inject(DestroyRef);

 
ngOnInit(): void {
       
        
      setTimeout(() =>{
          this.a

      }, 500)

        this.route.paramMap.subscribe(param => {
        this.title = param.get('title')!;

        this.url = '/survey/' + this.title;
      });
      
      
  }

  a() {
    this.isLoading = false;
  }

 
}
