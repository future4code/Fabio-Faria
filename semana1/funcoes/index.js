// //Interpretacao 1 -
// //a 10

// //b 50

// // Interpretacao 2

// /* Um prompt sendo armazenado na variavel textoDoUsuario
// uma function expression com parametro de texto.
// return esperando parametro em lowercase e verificando se existe a palavra 'cenoura', ou nao
// uma const contendo a resposta armazenada para a funcao contendo o argumento textoDoUsuario
// console.log contendo a resposta.

// i. eu gosto de cenoura true
// ii. cenoura é bom pra vista true
// iii. cenouras crescem na terra false
// */

// // Exercicio 1

// function minhasInfos() {
//   console.log(
//     "Eu me chamo Fabio, tenho 33 anos, moro no Rio de Janeiro e sou estudante"
//   );
// }

// minhasInfos();

// function minhasInfosComParametros(nome, idade, cidade, profissao) {
//   console.log(
//     `Eu me chamo ${nome}, tenho ${idade}, sou do ${cidade} e sou ${profissao}`
//   );
// }

// minhasInfosComParametros("Fabio", 33, "Rio de Janeiro", "estudante");

// // Exercicio 2
// //a
// const soma = (a, b) => a + b;

// console.log(soma(8, 87));

// //b

// const checkNumbers = (a, b) => a >= b;

// console.log(checkNumbers(6, 7));

// //c

// const checarNumeroPar = (a) => a % 2 === 0;

// console.log(checarNumeroPar(2));

// //d

// function mensagemEmCaixaAlta(mensagem) {
//   console.log(mensagem.toUpperCase());
//   console.log(`Essa mensagem tem ${mensagem.length} letras`);
// }

// mensagemEmCaixaAlta("essa eh uma mensagem qualquer");

// //Exercicio 3

// //Soma
// const userInput1 = Number(
//   prompt("Insira um numero para fazer operacoes matematicas")
// );
// const userInput2 = Number(
//   prompt("Insira outro numero para fazer operacoes matematicas")
// );

// const somaFunction = (userInput1, userInput2) => {
//   console.log(`A soma é: ${userInput1 + userInput2}`);
// };

// somaFunction(userInput1, userInput2);

// //Subtracao
// const subtracaoFunction = (userInput1, userInput2) => {
//   console.log(`A subtracao é: ${userInput1 - userInput2}`);
// };

// subtracaoFunction(userInput1, userInput2);

// // Multiplicacao
// const multiplicacaoFunction = (userInput1, userInput2) => {
//   console.log(`A multplicacao é: ${userInput1 * userInput2}`);
// };

// multiplicacaoFunction(userInput1, userInput2);

// // Divisao

// const divisaoFunction = (userInput1, userInput2) => {
//   console.log(`A divisao é: ${userInput1 / userInput2}`);
// };

// divisaoFunction(userInput1, userInput2);

// // Desafio

// const arrow1 = (parametro) => parametro;

// const arrow2 = (a, b) => {
//   const resultado = a + b;
//   console.log(arrow1(resultado));
// };

// arrow2(10, 20);

// // Desafio 2
