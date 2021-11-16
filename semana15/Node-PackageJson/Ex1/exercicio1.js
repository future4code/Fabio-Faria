const colors = require("colors");

const nome = process.argv[2];
const idade = process.argv[3];

console.log(`Olá, ${nome}! Você tem ${idade} anos.`.rainbow);
