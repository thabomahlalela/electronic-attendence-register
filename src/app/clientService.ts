 
import { Injectable } from "@angular/core";
import { Company } from "./models/company.models";
import { Survey } from "./components/survey/survey";
import { SurveyObj } from "./models/survey.model";
import { Meeting } from "./models/meeting.models";
import { Question } from "./models/question.model";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "./models/person.model";
import { Attendance } from "./models/attendance.model";
import { AuthResponse } from "./models/authResponse.model";
import { Router } from "@angular/router";



@Injectable({
    providedIn : 'root'
})
export class ClientService{
  
    private http = inject(HttpClient);
    private router = inject(Router)
    private error? : string;
    
    
     
    private viewedCompany!:Company;
    private viewedSurvey! : SurveyObj;
    private viewedMeeting! : Meeting;
     
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
    private questions!: Question[];

   
    setClickedCompany(company:Company) {
        this.viewedCompany = company;
        console.log(this.viewedCompany.name)
    }
    

      registerCompany(company : Company) :void{
        console.log(company);
        this.http.post("/api/capture-company",company).subscribe({});

        
      }
      updateCompany(company : Company){
        console.log("im about to update company")
         this.http.patch("/api/update-company",company).subscribe();
      }

      deRegisterCompany(company : Company) {
        console.log(company.id);
        this.http.delete(`/api/delete-company/${company.id}`).subscribe();
      }

      captureSurvey(survey: SurveyObj):void{
        console.log(survey)
        let surveys : SurveyObj[] = []
        surveys.push(survey) 
        this.company.surveys = surveys
        this.http.patch("/api/update-company",this.company).subscribe();


      }

      deleteSurvey(survey:SurveyObj) {
        console.log(survey.id)
        this.http.delete(`/api/delete-survey/${survey.id}`).subscribe();
        
      }

    captureMeeting(meeting: Meeting):void{
        let meetings: Meeting[] = []
        meetings.push(meeting);
        this.company.meetings = meetings
        this.http.patch("/api/update-company",this.company).subscribe();

     }  

     capturePerson(person : Person){
         console.log(person);
        let people: Person[] = []
        people.push(person);
        this.company.people = people
         this.http.post("/api/capture-person",this.company).subscribe();

     }

     updatePerson(person : Person){
        console.log("about to update person")
        person.company = this.company
        this.http.patch("/api/update-person",person).subscribe()
     }

     deletePerson(person:Person) {
         console.log(person.id);

        this.http.delete(`/api/delete-person/${person.id}`).subscribe();
     }

  captureAttences(meeting : Meeting) {
    console.log(meeting)
      this.http.patch("/api/update-meeting",meeting).subscribe()
   }

   captureSurveyAnswers(survey : SurveyObj){
        this.http.patch("/api/update-question",survey).subscribe();
   }

   viewCompanies(){
     return this.http.get<Company[]>("/api/view-companies")
   }

   viewSurveys(){
    console.log(this.company.id)
     return this.http.get<SurveyObj[]>(`/api/view-surveys/${this.company.id}`)
   }

   viewSurvey(surveyId : number){
     return this.http.get<SurveyObj>(`/api/view-survey/${surveyId}`)
   }
   setClickedSurvey(survey :SurveyObj){
    this.viewedSurvey = survey;
    console.log(this.viewedSurvey.title)
   }

   setQuestions(questions:Question[]){
    this.questions = questions
   }
   viewQuestions(){
        return  this.http.get<Question[]>(`/api/view-Questions/${this.viewedSurvey.id}`) ;
   }

   viewAnswers(questionId : number){
        return this.http.get<Question>(`/api/view-Answers/${questionId}`)
   }

   viewEmployees(){
         return this.http.get<Person[]>(`/api/view-Employees/${this.company.id}`)
   }
   viewMeetings(){
        return this.http.get<Meeting[]>(`/api/View-Meetings/${this.company.id}`)
   }

   viewMeeting(meetingID : number){
     return this.http.get<Meeting>(`/api/view-meeting/${meetingID}`)
   }

   deleteMeeting(meeting:Meeting) {
    this.http.delete(`/api/delete-meeting/${meeting.id}`).subscribe();
   }

   viewAttendance(){
         return this.http.get<Person[]>(`/api/view-attendances/${this.viewedMeeting.id}`)
   }

   login(username : string,password :string){
    console.log(username,password)
    this.http.post<AuthResponse>("/api/my-login",{username : username,password :password}).subscribe({
      next : (authres)=>{
        console.log(authres.person)
        console.log(authres.roles)
        console.log(authres.person.company)
        console.log(authres.token)
        localStorage.setItem('authToken',authres.token)
        localStorage.setItem('roles',JSON.stringify(authres.roles))
      if(authres.roles.includes('ROLE_ClientADMIN')){
        this.router.navigate(["client-admin-home"])
      }else if(authres.roles.includes('ROLE_CustomADMIN')){
        this.router.navigate(['custom-admin'])
        this.viewedCompany = authres.person.company!
      }


        this.error = ''
      },
      error : (error)=>{
        this.error = error.error
        console.log(error.error)
      }
    
    }  )
   }
   setClickedMeeting(meeting : Meeting){
        this.viewedMeeting = meeting
   }
    get getOptions() {
        return this.clientOptions
    }

    get getQuestions(): Question[] {
      return this.questions
    }

    get company(){
        return this.viewedCompany
    }

    get getError(){
      return this.error;
    }

    // get questions():string[]{
    //     return this._questions
    // }

    get survey():SurveyObj {
        return this.viewedSurvey
    }

     

    // addQuestion():void{
    //     this._questions.push('');
    // }

    getComplaints(): Observable<Question[]>{
        console.log('heeeeyyy')
        return this.http.get<Question[]>(`/api/viewComplaints/${this.company.id}`)
    }
    deleteComplaints(numbers:number){
        this.http.delete(`/api/deleteComplaints/${numbers}`).subscribe({
            
        })
        

    }

    comments(comment:Question){
        this.http.post("/api/add-comment",comment).subscribe( {
}

        )
        console.log(comment)
}

 

    
}

   