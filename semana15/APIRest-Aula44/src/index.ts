import express, { Express, Request, Response } from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

//a - Metodo para buscar todos: get
//b - Entidade: /users

//Ex2

app.get('/users/:type', (req: Request, res: Response) => {
    const type = req.params.type;
    const result = users.filter(user => user.type === type);
    res.status(200).send(result);
})

//a /users/:type - utilizei para que a requisicao seja especifica para o type
//b Enteidade, no caso, /users

// Ex2

enum UserTypes {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

type user = {
    id: number,
    name: string,
    email: string,
    type: UserTypes,
    age: number
}

// Usando ENUM podemos especificar o tipo de dados que queremos

// Ex3

app.get('/users/:name', (req: Request, res: Response) => {
    const name = req.params.name;
    const result = users.filter(user => user.name === name);
    if(result.length > 0) {
        res.status(200).send(result);
    } else {
        res.status(404).send({message: "User not found"});
    }
})

// Tipo get, para buscar nome usando parametro.

//Ex4

app.put('/users', (req: Request, res: Response) => {
    let errorCode: number = 400;
    
    try {
    const { id, name, email, type, age } = req.body;
    
    if(!id || !name || !email || !type || !age) {
        errorCode = 422;
        throw new Error("Please verify the body content");
    }
    const newUser: user = {
        id,
        name,
        email,
        type,
        age
    }

    users.push(newUser);
    res.status(201).send({message: "User created successfully"});
        
    } catch (error) {
        res.status(errorCode).send({message: error});
    }
})

//A - Put para fazer uma especie de update enquanto post para criar um novo.

//b - Put eh mais apropriado para atualizar alguma informacao, como endereco de email, por exemplo.