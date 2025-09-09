import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Company } from "../models/company.models";
import { SurveyObj } from "../models/survey.model";

@Injectable({
    providedIn: 'root',
    
})
export class CustomersAdmin{
    private http = inject(HttpClient)
    private viewedCompany!:Company;


    viewCompanies(){
         return this.http.get<Company[]>("/api/view-companies")
     }

     setClickedCompany(company:Company) {
        this.viewedCompany = company;
        console.log(this.viewedCompany.name)
    }

    viewSurvey(){
        console.log(this.company.id)
         return this.http.get<SurveyObj[]>(`/api/view-surveys/${this.company.id}`)
       }

    get company(){
        return this.viewedCompany
    }

}