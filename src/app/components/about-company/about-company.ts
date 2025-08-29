import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ViewUsers } from "../view-users/view-users";

@Component({
  selector: 'app-about-company',
  imports: [MatIcon, MatButtonModule, ViewUsers],
  templateUrl: './about-company.html',
  styleUrl: './about-company.css'
})
export class AboutCompany {

}
