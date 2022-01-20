import { Competition, CompetititonInputDTO } from "../entities/Competition";
import {CompetitionDatabase} from '../data/CompetitionDatabase';
import { IdGenerator } from "../services/IdGenerator";

export class CompetitionBusiness {
    async createCompetition(input: CompetititonInputDTO) {
        try {

            if(!input.competitions || !input.startingDate || !input.endingDate) {
                throw new Error("Invalid input");
            }

            const idGenerator = new IdGenerator();
            const id: string = idGenerator.generateId();

            const competition: Competition = {
                id: id,
                competitions: input.competitions,
                startingDate: new Date(),
                endingDate: new Date(),
                status: input.status
            }

            await new CompetitionDatabase().createCompetition(competition);
            
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}