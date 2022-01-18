import { v4 } from "uuid";
import * as jwt from "jsonwebtoken";

export const generateId = (): string =>  {
    return v4();
  }

  const expiresIn = '1min';
  
  export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    )
    return token;
  }

  type AuthenticationData = {
    id: string;
  }