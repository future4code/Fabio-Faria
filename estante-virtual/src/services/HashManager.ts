import {compareSync, genSaltSync, hashSync} from 'bcryptjs';

export class HashManager {
    createHash = (input: string) => {
        const salt = genSaltSync(12);
        const cypherText = hashSync(input, salt);
        return cypherText;
    }

    compareHash = (input: string, cypherText: string) => {
        return compareSync(input, cypherText);
    }
}