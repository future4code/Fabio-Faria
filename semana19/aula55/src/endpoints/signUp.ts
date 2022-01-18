import { connection } from "../data/connection";
import { Request, Response } from "express";
import { generateId, generateToken } from "../services/IdGenerator";
import {createUser} from "../data/createUser";

export const signUp = async(req: Request, res: Response) => {
    try {
        if(!req.body.email || req.body.email.indedOf('@') === -1) {
            throw new Error('Invalid email');
        }
        if(!req.body.password || req.body.password.length < 6) {
            throw new Error('Invalid password');
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const id = generateId()

        await createUser(id, userData.email, userData.password);

        const token = generateToken({
            id,
        })

        res.status(200).send({
            token,
        })
    }
    catch (error: any) {
        res.status(400).send({Message: error.message})};
    }
