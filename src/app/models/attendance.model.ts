import { Meeting } from "./meeting.models";
import { Person } from "./person.model";

export interface Attendance{
    id : number;
    person : Person;
    meeting? : Meeting;
}