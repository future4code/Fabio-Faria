import express, {Express} from 'express';
import cors from 'cors'
import { AddressInfo } from 'net';

const app: Express = express();

app.use(cors());
app.use(express.json())

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

export default app;