import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const mailTransporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
    tls: { ciphers: 'SSLv3' }

})

export default mailTransporter;