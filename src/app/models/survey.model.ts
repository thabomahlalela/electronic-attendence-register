 import { Question } from "./question.model";


export interface SurveyObj {
    id : number,
    title:string;
    description:string;
    questions?:Question[];
}