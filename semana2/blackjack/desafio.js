/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//EXERCICIO

// console.log("Bem vindo ao Blackjack da Labenu!");

// const confirmarNovaRodada = confirm("Quer iniciar uma nova rodada?");
// if (confirmarNovaRodada) {
//   const player1 = comprarCarta();
//   console.log(
//     `Usuario - cartas: ${player1.texto} - ponutaçāo: ${player1.valor}`
//   );
//   const computador = comprarCarta();
//   console.log(
//     `Usuario - cartas: ${computador.texto} - ponutaçāo: ${computador.valor}`
//   );
//   if (player1.valor === computador.valor) {
//     console.log("Empate!!!");
//   } else if (player1.valor > computador.valor) {
//     console.log(`O player1 venceu!`);
//   } else if (player1.valor < computador.valor) {
//     console.log(`O player2 venceu!`);
//   }
// } else {
//   console.log("O jogo acabou!");
// }

console.log("Bem vindo ao mais famoso BlackJack da Labenu!");

const iniciarOJogo = confirm("Deseja iniciar o jogo?");

const player1Cartas = [];
const player2Cartas = [];
let player1Pontos = 0;
let player2Pontos = 0;

switch (iniciarOJogo) {
  case false:
    console.log("Você desistiu! Volte sempre!");
    break;
  case true:
    console.log("Vamos começar!");
    player1 = comprarCarta();
    player2 = comprarCarta();
    player1Cartas.push(player1);
    player2Cartas.push(player2);
    console.log(player1Cartas[0].texto);
    console.log(player2Cartas[0].texto);
    if (player1Cartas[0][1] === "A" && player2Cartas[0][2] === "A") {
      player1 = comprarCarta();
      player2 = comprarCarta();
      player1Cartas.push(player1);
      player2Cartas.push(player2);
    }
    const confirmarNovaRodada =
      confirm(`Suas cartas sāo ${player1Cartas[0][1].texto}. A carta do computador é ${player2Cartas[0].texto}
                                          Deseja comprar mais uma carta?`);
    if (confirmarNovaRodada) {
      player1.valor += player1Pontos;
      player2.valor += player2Pontos;
      console.log(player1Pontos);
      console.log(player2Pontos);
    }

    console.log(player1Cartas[0].texto);
    console.log(player2Cartas[0].texto);
}
