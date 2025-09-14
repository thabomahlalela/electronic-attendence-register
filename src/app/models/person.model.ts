import { Company } from "./company.models";

export interface Person {
    id : number,
    name : string,
    surname : string,
    employNO : string,
    email : string,
    company? : Company
}


