import { Component } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';


@Component({
  selector: 'app-generate-qr-code',
  imports: [QRCodeComponent],
  templateUrl: './generate-qr-code.html',
  styleUrl: './generate-qr-code.css'
})
export class GenerateQrCode {
  isLoading = false;
}
