 
import { inject, Injectable } from "@angular/core";
import { Company } from "./models/company.models";
import { Survey } from "./components/survey/survey";
import { SurveyObj } from "./models/survey.model";
import { Meeting } from "./models/meeting.models";
import { HttpClient } from "@angular/common/http";
import { Person } from "./models/person.model";
import { Attendance } from "./models/attendance.model";

@Injectable({
    providedIn : 'root'
})
export class ClientService{
private http = inject(HttpClient)
    private viewedCompany!:Company;
    companies:Company[]= [
        {
            id:1,
            name:'metaware',
            city:'Orkney',
            registrationNO : '1234',
            address:'smalet street',
            sector:'Tech',
            email:'metaware@gmail.com',
            telNo:'0123783',
            status:'active',
        },
         {
            id:2,
            name:'meta',
            city:'Orkney',
              registrationNO : '12345',
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        },
        {
            id:2,
            name:'meta',
            city:'Orkney',
              registrationNO : '12346',
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        },
        {
            id:2,
            name:'meta',
            city:'Orkney',
            registrationNO : '12346',
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        },
        {
            id:2,
            name:'meta',
            city:'Orkney',
            registrationNO : '12346',
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        },
        {
            id:2,
            name:'meta',
            city:'Orkney',
            registrationNO : '12346',
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        },
         {
            id:2,
            name:'meta',
            registrationNO : '12346',
            city:'Orkney',
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        },

    ]
    

    clientOptions= [
        {
            id:'1',
            name:'home',
            path:'',
        },
         {
            id:'2',
            name:'companies',
            path:'/view-companies',
        },
         {
            id:'3',
            name:'log-out',
            path:'register-company',
        }
    ]

    get getCompanies() {
        return this.companies
    }

    setClickedCompany(company:Company) {
        this.viewedCompany = company;
        console.log(this.viewedCompany.name)
    }
    

      registerCompany(company : Company) :void{
        console.log("capturing company",company);
        this.http.post("/api/capture-company",company).subscribe();
        
      }

      captureSurvey(survey: SurveyObj):void{
        console.log(survey)
        let surveys : SurveyObj[] = []
        surveys.push(survey)
        let company : Company = {
                id : 1,
                name:'metawre',
                city:'orkney',
                registrationNO : '12343556',
                address: 'smollet str 3',
                sector:'Tech',
                email: 'metaware@co.za',
                telNo: '124453662',
                status:'ACTIVE',
                surveys : surveys
        }

        this.http.patch("/api/capture-surveys",company).subscribe();


      }

    captureMeeting(meeting: Meeting):void{
        console.log(meeting);
        let meetings: Meeting[] = []
        meetings.push(meeting);
         let company : Company = {
                id : 1,
                name:'metawre',
                city:'orkney',
                registrationNO : '12343556',
                address: 'smollet str 3',
                sector:'Tech',
                email: 'metaware@co.za',
                telNo: '124453662',
                status:'ACTIVE',
                meetings : meetings
        }

         this.http.patch("/api/capture-surveys",company).subscribe();

     }  

     capturePerson(person : Person){
         console.log(person);
        let people: Person[] = []
        people.push(person);
         let company : Company = {
                id : 1,
                name:'metawre',
                city:'orkney',
                registrationNO : '12343556',
                address: 'smollet str 3',
                sector:'Tech',
                email: 'metaware@co.za',
                telNo: '124453662',
                status:'ACTIVE',
                people : people
        }

        this.http.post("/api/capture-person",company).subscribe()

     }

  captureAttences(meeting : Meeting) {
      this.http.patch("/api/update-meeting",meeting).subscribe()
   }
    

    

    get getOptions() {
        return this.clientOptions
    }

    get company() {
        return this.viewedCompany;
    }
}
   