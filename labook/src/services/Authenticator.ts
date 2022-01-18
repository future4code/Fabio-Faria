import { sign } from "jsonwebtoken"
import { authenticationData } from "../model/User"
import { config } from "dotenv"


config();


export class Authenticator  {
    generateToken = (payload: authenticationData) => {
        return sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "1h"
            }
        )
    }
    getTokenData = () => {}
}