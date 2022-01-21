export enum COMPETITION_STATUS {
    OPEN = "open",
    CLOSED = "closed"
}

export interface Competition {
    id: string;
    competitions: string;
    startingDate: Date;
    endingDate: Date;
    status: COMPETITION_STATUS;

}

export class CompetititonInputDTO {
    competitions: string;
    startingDate: Date;
    endingDate: Date;
    status: COMPETITION_STATUS;
}