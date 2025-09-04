import { Meeting } from "./meeting.models";
import { Person } from "./person.model";

export interface Attendance{
    person : Person;
    meeting? : Meeting;
}