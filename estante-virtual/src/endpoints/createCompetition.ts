import express from 'express'
import { CreateCompetitionController } from '../controller/createCompetitionController'

export const competitionRouter = express.Router();
const competitionController = new CreateCompetitionController();

competitionRouter.post('/', competitionController.createCompetition);