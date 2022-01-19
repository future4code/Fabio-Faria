import { Request, Response } from "express";

export class CreateCompetitionController {
    createCompetition(req: Request, res: Response) {
        try {}
        catch(error: any) {
            let message = error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({message})
        }
    }
}