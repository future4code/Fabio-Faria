import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app: Express = express();

app.use(express.json())
app.use(cors())


app.post('/users/create', (req: Request, res: Response) => {
    try{
        const { name, cpf, dateOfBirthAsString} = req.body;

        const [day, month, year] = dateOfBirthAsString.split('/');

        const dateOfBirth = new Date(`${year}-${month}-${day}`);

        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime();
        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365;

        if(ageInYears < 18){
            res.statusCode = 406;
            throw new Error('User must be older than 18 years old');
        }

        accounts.push({
            name,
            cpf, 
            dateOfBirth,
            balance: 0,
            statement: []
        })
        
        res.status(200).send({  message: 'Account created successfully' })
        
    } catch (error: any) {
        res.send(error.message)
    }
})

app.get('/users/all', (req: Request, res: Response) => {
    try{
        if(!accounts.length) {
            res.statusCode = 404
            throw new Error('No accounts found')
        }
        console.log(accounts)
        res.status(200).send(accounts)
    }
    catch (error: any) {
        res.send(error.message)
    }
})



app.listen(3003, () => {
    console.log('server is running on port 3003');
})