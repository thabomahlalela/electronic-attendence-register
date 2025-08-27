 
import { Injectable } from "@angular/core";
import { Company } from "./models/company.models";

@Injectable({
    providedIn : 'root'
})
export class ClientService{
    companies:Company[]= [
        {
            id:1,
            name:'metaware',
            city:'Orkney',
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
            address:'smalet street',
            sector:'email',
            email:'metaware@gmail.com',
            telNo:'0126783',
            status:'active',
        }
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

    get getOptions() {
        return this.clientOptions
    }
}
   