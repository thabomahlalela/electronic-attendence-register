import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class ClientService{
     private apiUrl = '/api/companies';


      constructor(private http:HttpClient){}

    

}
   