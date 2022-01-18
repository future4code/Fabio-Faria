import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {AddressInfo} from 'net';
import { addUser, getAllUsers } from './endpoints/users';
import { addProduct, getAllProducts } from './endpoints/products';


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

app.post('/user', addUser);

app.get('/all/users', getAllUsers);

app.get('/all/products', getAllProducts);

app.post('/products', addProduct );