export interface Meeting{
    id :number;
    title:string;
    description: string;
    startTime :Date;
    endDate :Date;
    // attendees?:User[];
    location : string;
    status : string;
}