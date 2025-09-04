import { Person } from "./person.model";


export interface Meeting{
    id :number;
    title:string;
    description: string;
    startTime :string;
    endTime :string;
    date :string;
    location : string;
    status : string;
    people?:Person[];
}