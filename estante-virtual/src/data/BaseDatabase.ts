
import dotenv from 'dotenv'
import knex from 'knex';
import Knex from 'knex';

dotenv.config();

export class BaseDatabase{
    protected connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        },
    })

} 