/*INTERPRETACAO
1- valor = 4;
O loop esta acrescentando 1 a cada iteraçāo

2- a) todos os numeros menores que 18.
   b) Sim, eh suficiente. para acessar basta retirar a condicao de '>' e colocar console.log(numero)

3- Vai imprimir * de acordo com a quantidade de linhas, formando uma arvore.
*/

const quantiaDeBichos = Number(
  prompt("Ola, quantos bichinhos de estimacao voce tem?")
);
const contagemDeBichos = [];

if (quantiaDeBichos === 0) {
  console.log("Nao tem bichinhos.");
}
for (let i = 0; i < quantiaDeBichos; i++) {
  if (quantiaDeBichos > 0) {
    const nomes = prompt("Qual nome deles?");
    contagemDeBichos.push(nomes);
  } else {
    console.log("Digite um valor valido!");
  }
}
console.log(contagemDeBichos);

//2

const arrayNumeros = [1, 2, 3, 45, 69, 83, 10, 20, 34];

const arrayPares = [];

const arrayStrings = ["Teste", "Teste2", "Teste3"];

const imprimirNumerosArray = (arrayNumeros) => {
  for (let numero of arrayNumeros) {
    console.log(numero);
  }
};

const imprimirNumerosDividosPor10 = (arrayNumeros) => {
  for (let numero of arrayNumeros) {
    if (numero % 10 === 0) {
      console.log(numero);
    }
  }
};

const jogarNumerosParesEmArray = (arrayNumeros) => {
  for (let numero of arrayNumeros) {
    if (numero % 2 === 0) {
      arrayPares.push(numero);
    }
  }
  console.log(arrayPares);
};

jogarNumerosParesEmArray(arrayNumeros);

const contagemDeIndex = (arrayStrings) => {
  for (let i = 0; i < arrayStrings.length; i++) {
    console.log(`O elemento ${i} é ${arrayStrings[i]}`);
  }
};

contagemDeIndex(arrayStrings);

const imprimirMaiorNumero = (arrayNumeros) => {
  let maior = 0;
  for (let numero of arrayNumeros) {
    if (numero > maior) {
      maior = numero;
    }
  }
  console.log(`O maior numero do array é: ${maior}`);
};

const imprimirMenorNumero = (arrayNumeros) => {
  let menor = arrayNumeros[0];
  for (let numero of arrayNumeros) {
    if (numero < menor) {
      menor = numero;
    }
  }
  console.log(`O menor numero do array é: ${menor}`);
};

imprimirMaiorNumero(arrayNumeros);
imprimirMenorNumero(arrayNumeros);

//DESAFIO

const player1 = Number(prompt("Digite um numero para comecar o jogo!"));
console.log("Bem vindo ao jogo de advinhaçāo!");

while (true) {
  const player2 = Number(prompt("Tente advinhar o numero do player1"));
  if (player2 === player1) {
    console.log(`Parabens, você acertou!`);
    break;
  } else if (player2 > player1) {
    console.log("Tente um numero menor!");
  } else if (player2 < player1) {
    console.log("Tente um numero maior!");
  }
}

//Desafio pt2

const computador = Math.floor(Math.random() * 100);
const player1 = prompt("Qual nome do jogador?");
alert(`Bem vindo ao jogo, ${player1}!`);

while (true) {
  const tryANumber = prompt(`${player1},
    Tente advinhar o numero do computador com numero de 1 a 100. Digite 0 para desistir.
  `);
  if (tryANumber == computador) {
    console.log(`Parabens, ${player1} você acertou!`);
    break;
  } else if (tryANumber === 0) {
    console.log("Voce desistiu!");
    break;
  } else if (tryANumber > computador) {
    console.log("Tente um numero menor!");
  } else if (tryANumber < computador) {
    console.log("Tente um numero maior!");
  }
}
