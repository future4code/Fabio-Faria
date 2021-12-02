import dotenv from 'dotenv'
import app from "./app"
import createUser from './endpoints/createUser'
import mailTransporter from './services/mailTransporter'
import { getAddressInfo } from './services/getAddressInfo'


dotenv.config()

app.post('/users/signup', createUser)

app.post('/createAddress/:cep', async(req, res) => {
    try {
    const { cep } = req.params
    const body = 
    }
    
    
})

// app.post('/users/')

//  mailTransporter.sendMail({
//     from: "<fariafabioca@gmail.com>",
//     to: "<fariafabioca@gmail.com>",
//     subject: "Teste",
//     text: "Teste",
//     html: "<h1>Teste</h1>"
// }).then(console.log).catch(console.log)


