import express, {application, Express, Request, Response} from 'express';
import cors from 'cors';
import {AddressInfo} from 'net';
import { connection } from './connections';

const app: Express = express()

app.use(cors())
app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})


const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
    const query = req.query.query || '%'
    const sort = req.query.sort === 'name' ? 'name' : 'email'
    const order = req.query.order === 'asc' ? 'asc' : 'desc'
    const page = Number(req.query.page) || 1

    const result = await connection('aula49_exercicio')
    .where('name', 'like', `%${query}%`)
    .orWhere('type', 'LIKE', `${query}`)
    .orderBy(sort, order)
    .limit(5)
    .offset((page - 1) * 5)
    
    if(!query) {
        const emptyResult = await connection('aula49_exercicio')
        .select('*')
        .orderBy('name', 'desc')
        .offset((page - 1) * 5)
        res.status(200).send(emptyResult)
    }

    res.status(200).send(result)
} catch (error: any) {
    res.status(400).send({
        message: error.message || 'Unexpected error'
    })
}
}

app.get('/users', getAllUsers)



