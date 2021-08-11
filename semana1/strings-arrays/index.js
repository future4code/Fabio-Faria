//Interpretacao
//a - Undefined

//b null

//c 11

//d 3

//e [3, 19, ...]

//f 9

//2 - SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercicio 1

const userName = prompt("Digite seu nome de usuario").toLowerCase().trim();

console.log(userName);

/// EXERCICIO 2

const comidaPreferida = [
  "batata fita",
  "churrasco",
  "pizza",
  "lasanha",
  "macarrao",
];

console.log(`Essas são minhas comidas preferidas: ${comidaPreferida}`);

const trocarComidaPreferida = prompt(
  "Substitua a segunda comida inserindo nome de outra"
);
comidaPreferida[1] = trocarComidaPreferida;
console.log(comidaPreferida);

// Exercicio 3

const listaDeTarefas = [];

const adicionarTarefa1 = prompt("Digite uma tarefa a ser feita");
const adicionarTarefa2 = prompt("Digite outra tarefa a ser feita");
const adicionarTarefa3 = prompt("Digite outra tarefa a ser feita");

listaDeTarefas.push(adicionarTarefa1);
listaDeTarefas.push(adicionarTarefa2);
listaDeTarefas.push(adicionarTarefa3);

console.log(listaDeTarefas);

const removerTarefas = Number(
  prompt("Digite 0, 1 ou 2 para remover tarefa desejada")
);

listaDeTarefas.splice(removerTarefas, 1);

console.log(`Suas tarefas atuais são: ${listaDeTarefas}`);

////// DESAFIO 1

const fraseArray = prompt("Digite uma frase para virar um array").split(" ");

console.log(fraseArray);

///// DESAFIO 2

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(frutas);

console.log(
  `O índice de Abacaxi é: ${frutas.indexOf(
    "Abacaxi"
  )} e o tamanho do array é: ${frutas.length} `
);
