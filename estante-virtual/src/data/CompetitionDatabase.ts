import { Competition } from "../entities/Competition";
import {BaseDatabase} from "./BaseDatabase";

export class CompetitionDatabase extends BaseDatabase {
    async createCompetition(competition: Competition) {
        try {
            await this.connection('competicoes')
            .insert({
                id: competition.id,
                competitions: competition.competitions,
                startingDate: competition.startingDate.toISOString().substring(0, 10),
                endingDate: competition.endingDate.toISOString().substring(0, 10),
                status: competition.status
            })
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}