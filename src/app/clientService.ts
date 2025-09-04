 
import { Injectable } from "@angular/core";
import { Company } from "./models/company.models";
import { Survey } from "./components/survey/survey";
import { SurveyObj } from "./models/survey.model";
import { Meeting } from "./models/meeting.models";
import { Question } from "./models/question.model";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class ClientService{
    private httpClient = inject(HttpClient);

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


    
}

   