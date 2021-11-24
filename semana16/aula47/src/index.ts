import express, { Express, Request, Response } from 'express';	 
import cors from 'cors';
import {AddressInfo} from 'net';
import { connection } from './connection';

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


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

const searchActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name LIKE '%${name}%'
  `)

  return result[0]
}

const searchActorGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  select count(*) from Actor where gender = '${gender}'
  `)
  // const count = result[0][0].count;
  return result[0][0];
}

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
  .update({
    salary: salary,
  })
  .where("id", id)
}

const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor")
  .delete()
  .where("id", id)
}

const getAvgSalary = async( gender: string, salary: number): Promise<any> => {
  await connection("Actor")
  .avg(salary)
  .where("gender", gender)
}

app.get('/actor', async(req: Request, res: Response) => {
  try {
    const count = await searchActorGender(req.query.gender as string)
    res.status(200).send({
      quantity: count,
    })
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/actor", async (req: Request, res: Response) => {
  try {
    const { id, salary } = req.body;
    await updateActor(id, salary);
    res.status(200).send({
      message: "Actor updated",
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteActor(id);
    res.status(200).send({
      message: "Actor deleted",
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
})