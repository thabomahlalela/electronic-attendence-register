 import { Question } from "./question.model";


export interface Survey {
    title:string;
    description:string;
    question?:Question[];
}