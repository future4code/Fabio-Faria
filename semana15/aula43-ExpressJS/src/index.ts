import express, { Request, Response } from 'express';
import cors from 'cors';
import { countries } from './data';
import { AddressInfo } from 'net';

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
})


app.get('/countries', (req: Request, res: Response) => {
    res.send(countries);
});

app.get('/countries/search' , (req: Request, res: Response) => {
    const name = req.query.name as any;
    if(!name) {
        res.status(400).send('Name is required');
    }
    
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
    res.send(filteredCountries);
})

app.get('/countries/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const country = countries.find(country => country.id === +id);
    
    if(country) {
        res.send(country);
    }
    else {
        res.status(404).send('Country not found');
    }

} )

app.put('/countries/:id', (req: Request, res: Response) => {
    const body: {
        name: string,
        capital: string,
    } = req.body;

    const id = req.params.id;

    const country: number = countries.findIndex((country) => country.id === Number(id));

    if(country) {
        countries[country].name = body.name;
        countries[country].capital = body.capital;
        res.send(countries[country]);
    }
    else {
        res.status(404).send('Country not found');  
    }
    // retornando coisa errada
})