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

// EXERCICIO

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

//
const cartasPlayer1 = [];
const cartasPlayer2 = [];
let player1pontos = 0;
let player2pontos = 0;

const rodada = (evaluate) => {
  for (let i = 0; i < 2; i++) {
    const player1 = comprarCarta();
    cartasPlayer1.push(player1);
    const player2 = comprarCarta();
    cartasPlayer2.push(player2);
  }
};

const evaluate = () => {
  while (true) {
    if (cartasPlayer1[0].text0 === "A" && cartasPlayer1[1].texto === "A") {
      cartasPlayer1 = cartasPlayer1.splice(0, 2);
      cartasPlayer2 = cartasPlayer2.splice(0, 2);
      rodada();
    } else if (
      cartasPlayer2[0].text0 === "A" &&
      cartasPlayer2[1].texto === "A"
    ) {
      cartasPlayer2 = cartasPlayer2.splice(0, 2);
      cartasPlayer1 = cartasPlayer1.splice(0, 2);
      rodada();
    } else {
      break;
    }
  }
};

const start = () => {
  rodada(evaluate);
  console.log(cartasPlayer1);
  console.log(cartasPlayer2);
};

const iniciarJogo = confirm(`Voce gostaria de comecar o jogo?`);

switch (iniciarJogo) {
  case true:
    start();
    switch (resposta) {
      case true:
        rodada();
        break;
      case false:
    }
    break;
  case false:
    console.log("Teste");
}

const resposta = confirm(
  `Suas cartas são ${cartasplayer1[0].texto} e ${cartasplayer1[1].texto}. A carta revelada do computador é ${cartasplayer2[0].texto}
   Deseja comprar mais uma carta?`
);
