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

const createUser = async (id: string, title: string, email: string, nicktitle: string): Promise<void>  => {
    await connection
    .insert({
        id,
        title,
        email,
        nicktitle
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

const editUser = async (id: string, title: string, nicktitle: string): Promise<void> => {
    await connection
    .from("Users")
    .where({id})
    .update({
        title,
        nicktitle
    })
}

const createTask = async (id: string, title: string, description: string, limiteDate: any, creatorUserId: string): Promise<void> => {
    await connection
    .insert({
        id,
        title,
        description,
        limiteDate,
        creatorUserId
    })
    .into("Tasks")
}

const getAllTasks = async (): Promise<any> => {
    const result = await connection
    .select("*")
    .from("Tasks")
    return result
}

const getTaskById = async (id: string): Promise<any> => {
    const result = await connection
    .select("*")
    .from("Tasks")
    .where({id})
    return result[0]
}

app.post('/user', async (req: Request, res: Response) => {
    try {
        if(!req.body.id || !req.body.title || !req.body.email || !req.body.nicktitle){
            res.statusCode = 400;
            throw new Error('Missing Data')}
            
        const { id, title, email, nicktitle } = req.body;
        await createUser(id.toString(), title, email, nicktitle);
        res.status(200).send("User Created");
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
        
    }
})

app.post('/task', async(req: Request, res: Response) => {
    try {

        if(!req.body.id || !req.body.title || !req.body.description || !req.body.limiteDate || !req.body.creatorUserId){
            res.statusCode = 400;
            throw new Error('Missing Data')}
            
        const { id, title, description, limiteDate, creatorUserId } = req.body;
        await createTask(id.toString(), title, description, limiteDate, creatorUserId);
        res.status(200).send("Task Created");
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
        
    }
})

app.get('/tasks/all', async(req: Request, res: Response) => {
    try {
        const result = await getAllTasks();
        res.status(200).send(result);
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

app.get('/task/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const task = await getTaskById(id);
        if(!task){
            res.statusCode = 404;
            throw new Error('Task not found')
        }
        res.status(200).send(task);
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
    }
})

app.put('/user/edit/:id', async(req: Request, res: Response) => {
    try {
        if(!req.body.id || !req.body.title || !req.body.nicktitle){
            res.statusCode = 400
            throw new Error('Missing Data')
        }

        const { id } = req.params;
        const { title, nicktitle } = req.body;
        await editUser(id, title, nicktitle);
        res.status(200).send("User Edited");
    } catch (err: any) {
        res.status(400).send({
            Message: err.message
        })
    }
})

