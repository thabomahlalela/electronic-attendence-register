import{Component,signal} from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { Survey } from "./components/survey/survey";
import { AboutCompany } from "./components/about-company/about-company";
import { CommentsComponent } from './components/comments-component/comments-component';
import { ViewComplaintsComponent } from "./components/view-complaints-component/view-complaints-component";
import { Meeting } from './models/meeting.models';
import { PastMeetingsComponent } from './components/past-meetings-component/past-meetings-component';
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutCompany, CommentsComponent, ViewComplaintsComponent,PastMeetingsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('attendece-register');

meetings:Meeting[] = [
    {
    id:1,
    title:"Jabu",
    description:"Register Attendence 2",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
  },


{
    id:1,
    title:"Peggy",
    description:"Register Attendence 2",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
  },

{
    id:1,
    title:"Tehilla",
    description:"Register Attendence 2",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
  },



  {
    id:1,
    title:"Thabo",
    description:"Register Attendence 2",
    startTime:"07:00",
    endTime:"10:00",
    location:"03 Smollet road",
    status:"Happening",
    
  },






]
}
