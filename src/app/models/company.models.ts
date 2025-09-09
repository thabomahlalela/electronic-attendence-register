import { Survey } from "../components/survey/survey";
import { Meeting } from "./meeting.models";
import { Person } from "./person.model";
import { Question } from "./question.model";
import { SurveyObj } from "./survey.model";

export interface Company {
    id:number;
    name:string;
    city:string;
    registrationNO : string;
    address:string;
    sector:string;
    email:string;
    telNo:string;
    status:string;
    comments?:Question[];
    surveys? :SurveyObj[]
    meetings? : Meeting[]
    people? : Person[]
}