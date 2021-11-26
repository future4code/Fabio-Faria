import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { connection } from './connections';

const app: Express = express();

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

const createUser = async (id: string, name: string, email: string, nickname: string): Promise<void>  => {
    await connection
    .insert({
        id,
        name,
        email,
        nickname
    })
    .into("Users")
}

const getUserById = async (id: string): Promise<any> => {
    const result = await connection
    .select("*")
    .from("Users")
    .where({id})
    return result[0]
}

const editUser = async (id: string, name: string, nickname: string): Promise<void> => {
    await connection
    .from("Users")
    .where({id})
    .update({
        name,
        nickname
    })
}

app.post('/user', async (req: Request, res: Response) => {
    try {
        if(!req.body.id || !req.body.name || !req.body.email || !req.body.nickname){
            res.statusCode = 400;
            throw new Error('Missing Data')}
            
        const { id, name, email, nickname } = req.body;
        await createUser(id.toString(), name, email, nickname);
        res.status(200).send("User Created");
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
        
    }
})

app.get('/user/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        if(!user){
            res.statusCode = 404;
            throw new Error('User not found')
        }
        res.status(200).send(user);
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
    }
})

app.put('/user/edit/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, nickname } = req.body;
        await editUser(id, name, nickname);
        res.status(200).send("User Edited");
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
    }
})

