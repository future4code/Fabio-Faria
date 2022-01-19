import { CompetititonInputDTO } from "../entities/Competition";

export class CompetitionBusiness {
    async createCompetition(input: CompetititonInputDTO) {
        try {
            
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}