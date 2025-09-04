

export interface Meeting{
    id :number;
    title:string;
    description: string;
    startTime :string;
    endTime :string;
    date :string;
    location : string;
    status : string;
    // attendees?:User[];
}