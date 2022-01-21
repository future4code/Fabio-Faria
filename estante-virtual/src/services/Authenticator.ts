import * as jwt from 'jsonwebtoken';
import {config} from 'dotenv'


config();

export interface AuthentitcationData {
    id: string
}

export class Authenticator {
    generateToken = (input: AuthentitcationData) => {
        return jwt.sign(
            input,
            process.env.JWT_KEY!,
            {
                expiresIn: "12h"
            }
        )
    }

    getTokenData = (token: string): AuthentitcationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY!) as any;
        return {
            id: payload.id
        }
    }
}