export interface Competition {
    id: string;
    competition: string;
    athelete: string;
    value: number;
    unity: string;
}

export class CompetititonInputDTO {
    competition: string;
    athelete: string;
    value: number;
    unity: string;
}