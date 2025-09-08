 
import { Injectable } from "@angular/core";
import { Company } from "./models/company.models";
import { Survey } from "./components/survey/survey";
import { SurveyObj } from "./models/survey.model";
import { Meeting } from "./models/meeting.models";
import { Question } from "./models/question.model";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ClientService{
  capturePerson(arg0: { id: number; name: any; surname: any; employNO: string; email: any; }) {
    throw new Error('Method not implemented.');
  }
  captureAttences(arg0: { attendeeId: number; user: { id: number; name: string; surname: string; phoneNumber: string; email: string; }; meeting: { id: number; title: string; description: string; startTime: string; endTime: string; location: string; status: string; date: string; }; }) {
    throw new Error('Method not implemented.');
  }
    private httpClient = inject(HttpClient);
    private viewedCompany!:Company

comments(comment:Question){
        this.httpClient.post("/api/add-comment",comment).subscribe( {
            // next:(resData) => {
            //     alert(resData.message)

            // }
        }

        )
        console.log(comment)

    





}


















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

        
      }

      captureSurvey(survey: SurveyObj):void{
        // console.log(survey)

      }

    captureMeeting(meeting: Meeting):void{
     }  

    

    get getOptions() {
        return this.clientOptions
    }

    get company(){
        return this.viewedCompany
    }


    getComplaints(): Observable<Question[]>{
        return this.httpClient.get<Question[]>("/api/viewComplaints")
    }
    deleteComplaints(numbers:number){
        this.httpClient.delete(`/api/deleteComplaints/${numbers}`).subscribe({
            
            
        })
        

    }


    
}

   