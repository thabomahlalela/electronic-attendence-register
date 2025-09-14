import { Person } from "./person.model";

export interface AuthResponse{
    token :string;
    person : Person;
   roles : string[];
}