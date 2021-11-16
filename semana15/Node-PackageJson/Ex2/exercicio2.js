const colors = require("colors");

const x = process.argv[2];
const y = process.argv[3];

const sum = Number(x) + Number(y);

console.log(`A Soma é ${sum}`.rainbow);
