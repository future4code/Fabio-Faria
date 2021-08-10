//1 Interpretacao - a: false / b: false / c: false / d: boolean

// 2 Interpretacao - Vai juntar os valores, pq nao foi utilizado o metodo de Number, logo, serao 2 strings como "1" + "2" = 12

//Exercicio 1:

const idadeUser = Number(prompt("Qual sua idade"));
const idadeAmigo = Number(prompt("Qual a idade de vc, meu amigo?"));

console.log("Sua idade é maior que a do seu amigo: ", idadeUser > idadeAmigo);
console.log(
  "A diferenca de idade entre voces é de:",
  idadeUser - idadeAmigo,
  "anos"
);

//Exercicio 2:

const numeroPar = Number(prompt("Digite um numero par"));
console.log(numeroPar % 2); // retorna 0. caso seja numero impar, vai retornar 1.

// Exercicio 3:

const idadeEmAnos = Number(prompt("Digite a idade em anos"));
console.log("Sua idade em meses é:", idadeEmAnos * 12);
console.log("Sua idade em dias é:", idadeEmAnos * 365);
console.log("Sua idade em horas é:", idadeEmAnos * 24 * 60 * 60);

// Exercicio 4:

const askNumber = Number(prompt("Digite um numero"));
const askAnotherNumber = Number(prompt("Digite outro numero"));

console.log(
  "O primeiro numero é maior que segundo?",
  askNumber > askAnotherNumber
);
console.log(
  "O segundo numero é maior que o primeiro?",
  askAnotherNumber > askNumber
);
console.log(
  "O primeiro numero é divisivel pelo segundo?",
  askNumber % askAnotherNumber === 0
);
console.log(
  "O segundo numero é divisivel pelo primeiro?",
  askAnotherNumber % askNumber === 0
);

//Desafio 1
// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

const temperaturaFaren = 77;
const farenheitParaKelvin = (temperaturaFaren - 32) * (5 / 9) + 273.15;

console.log("Temperatura Kelvin:", farenheitParaKelvin);

const temperaturaCelsius = 80;
const celsiusParaFarenheit = temperaturaCelsius * (9 / 5) + 32;

console.log("Temperatura Farenheit:", celsiusParaFarenheit);

const temperaturaNovaCelsius = Number(
  prompt("Insira um valor de temperatura em Celsius")
);
const celsiusEmFarenheit = temperaturaNovaCelsius * (9 / 5) + 32;
const farenheitNovoParaKelvin = (celsiusEmFarenheit - 32) * (5 / 9) + 273.15;

console.log(
  "Temperatura 30 graus celsius em Farenheit é:",
  celsiusEmFarenheit,
  "Temperatura de",
  celsiusEmFarenheit,
  "graus Farenheit em Kelvin é:",
  farenheitNovoParaKelvin
);

//Desafio 2
//a
const kwHora = 0.05;

const casa1 = kwHora * 280 * 1.5;
console.log(casa1);

//Desafio 3

const formulaLibras = 2.2046;

const pesoUsuario = 20;

console.log("Seu peso de Pounds para KG é:", pesoUsuario / formulaLibras);

//b
const valorOncas = 35.274;

const oncasUsuario = 10.5;

console.log("Seu valor de Oncas para KG é:", oncasUsuario / valorOncas);

//c

const valorMilhas = 1.609;
const velocidadeKmUser = 100;

console.log(
  "Sua velocidade de KM para Milhas é:",
  velocidadeKmUser * valorMilhas
);

// d

const formulaPes = 3.2808;
const valorMetros = 50;

console.log("A quantidade de 50 pes em metros é:", valorMetros / formulaPes);

// e

const formulaGalao = 0.26417;
const valorDeGaloes = 103.56;

console.log(
  "A quantidade de galoes convertida para litros é:",
  valorDeGaloes / formulaGalao
);

// f

const quantidadeXicaras = Number(
  prompt("Ola, quantas xicaras deseja converter?")
);
const formulaXicarasLitro = quantidadeXicaras * (6 / 25);

console.log(
  "O resultado da conversao das xicaras para litro é:",
  formulaXicarasLitro
);
