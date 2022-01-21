import { Competition } from "../entities/Competition";
import {BaseDatabase} from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
    async createCompetition(competition: Competition) {
        try {
            await this.connection('competicoes')
            .insert({
                id: competition.id,
                competitions: competition.competitions,
                startingDate: competition.startingDate,
                endingDate: competition.endingDate,
                status: competition.status
            })
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}