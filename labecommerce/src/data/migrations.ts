import {connection} from '../connections'
import users from '../users.json'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

// const createTable = () => connection
// .raw(`
//       CREATE TABLE IF NOT EXISTS labecommerce_users (
//         id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//       );
//    `)
// .then(() => console.log('Table created'))
// .catch(printError);

const insertUsers = () => connection('labecommerce_users')
.insert(users)
.then(() => console.log('Users inserted'))
.catch(printError);

const closeConnection = () => connection.destroy()

insertUsers().then(closeConnection)