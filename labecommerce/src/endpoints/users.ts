import { connection } from "../connections";
import express, {Request, Response} from 'express';


export const addUser = async (req: Request, res: Response): Promise<void> => {
    
    try {
    if(!req.body.name || !req.body.email || !req.body.password) {
        res.status(400)
        throw new Error("Please provide all the required fields")
    }
    
    const {name, email, password} = req.body;
    
    await connection
    .insert({
        id: Date.now().toString(),
        name,
        email,
        password
    })
    .into('labecommerce_users');
    
    res.status(201).send("User added")
    }

    
    catch(err: any) {
        res.status(400).send({Message: err.message})
    }
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || '%'
        const sort = req.query.sort || 'id' ? 'id' : 'name'
        const order = req.query.order || 'asc' ? 'asc' : 'desc'

        const users = await connection.select('*').from('labecommerce_users')
        .where('name', 'like', `%${query}%`)
        .orWhere('email', 'like', `%${query}%`)
        .orderBy(sort, order)
        
        if(!query) {
            const emptyResullt = await connection('labecommerce_users')
            .select('*')
            .orderBy('name', 'desc')
            res.status(200).send(emptyResullt)
        }

        res.status(200).send(users)
    }
    catch(err: any) {
        res.status(400).send({Message: err.message})
    }
}