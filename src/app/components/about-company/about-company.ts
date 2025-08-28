import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-about-company',
  imports: [ MatIcon, MatButtonModule],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {

}
