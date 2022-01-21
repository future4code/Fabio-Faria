import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetititonInputDTO } from "../entities/Competition";

export class CreateCompetitionController {
    createCompetition = async (req: Request, res: Response) =>{
        try {
            let message = "Competition created successfully";

            const input: CompetititonInputDTO = {
                competitions: req.body.competitions,
                startingDate: req.body.startingDate,
                endingDate: req.body.endingDate,
                status: req.body.status
            }

            await new CompetitionBusiness().createCompetition(input);

            res.status(201).send({message})


        }
        catch(error: any) {
            let message = error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({message})
        }
    }
}