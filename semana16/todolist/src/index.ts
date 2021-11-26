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

const createUser = async (id: any, name: string, email: string, nickname: string): Promise<void>  => {
    await connection
    .insert({
        id: new Date().getTime(),
        name,
        email,
        nickname
    })
    .into("Users")
}

app.post('/user', async (req: Request, res: Response) => {
    try {
        if(!req.body.name || !req.body.email || !req.body.nickname){
            res.statusCode = 400;
            throw new Error('Missing Data')}
            
        const { name, email, nickname } = req.body;
        await createUser(new Date().getTime(), name, email, nickname);
        res.status(200).send("User Created");
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
        
    }
})

