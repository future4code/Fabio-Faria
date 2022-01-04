import { app } from "./app";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const idGenerator = new IdGenerator;
const id = idGenerator.generate();

console.log("id:", id)

const hashPass = new HashManager();
const hash = hashPass.createHash("123456");

console.log("hash:", hash)

const token = new Authenticator().generateToken({ id });

console.log("token:", token)