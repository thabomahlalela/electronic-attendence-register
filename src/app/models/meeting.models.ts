import { User } from "./user.model";

export interface Meeting{
    id :number;
    title:string;
    description: string;
    startTime :string;
    endTime :string;
    location : string;
    status : string;
     attendees?:User[];
}