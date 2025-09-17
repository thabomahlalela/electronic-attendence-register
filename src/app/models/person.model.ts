import { Company } from "./company.models";
import { User } from "./user.model";

export interface Person {
    id : number,
    name : string,
    surname : string,
    employNO : string,
    email : string,
    company? : Company
    user? : User
}


