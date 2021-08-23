// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  *
//  *
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  *
//  *
//  *
//  */

// // EXERCICIO

// // console.log("Bem vindo ao Blackjack da Labenu!");

// // const confirmarNovaRodada = confirm("Quer iniciar uma nova rodada?");
// // if (confirmarNovaRodada) {
// //   const player1 = comprarCarta();
// //   console.log(
// //     `Usuario - cartas: ${player1.texto} - ponutaçāo: ${player1.valor}`
// //   );
// //   const computador = comprarCarta();
// //   console.log(
// //     `Usuario - cartas: ${computador.texto} - ponutaçāo: ${computador.valor}`
// //   );
// //   if (player1.valor === computador.valor) {
// //     console.log("Empate!!!");
// //   } else if (player1.valor > computador.valor) {
// //     console.log(`O player1 venceu!`);
// //   } else if (player1.valor < computador.valor) {
// //     console.log(`O player2 venceu!`);
// //   }
// // } else {
// //   console.log("O jogo acabou!");
// // }

// DESAFIO

const cartasPlayer1 = [];
const cartasPlayer2 = [];
let player1pontos = 0;
let player2pontos = 0;
let vencedor = "";

const iniciarJogo = confirm(`Voce gostaria de comecar o jogo?`);

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
};

const checarPontos = () => {
  for (let i = 0; i < cartasPlayer1.length; i++) {
    player1pontos += cartasPlayer1[i].valor;
  }
  for (let i = 0; i < cartasPlayer2.length; i++) {
    player2pontos += cartasPlayer2[i].valor;
  }
};

start();

const checarVencedor = () => {
  checarPontos();
  if (player1pontos > player2pontos && player1pontos <= 21) {
    vencedor = "usuario";
  } else if (player2pontos > player1pontos && player2pontos <= 21) {
    vencedor = `computador`;
  } else if (player1pontos > 21) {
    vencedor = `computador`;
  } else if (player2pontos > 21) {
    vencedor = `usuario`;
  }
};

let continuar = true;

while (continuar) {
  const resposta = confirm(
    `Suas cartas sāo ${cartasPlayer1[0].texto} ${cartasPlayer1[1].texto}. A carta revelada pelo computador é ${cartasPlayer2[0].texto}. Deseja comprar mais uma carta?`
  );
  if (resposta) {
    checarVencedor();
  } else {
    checarVencedor();
    break;
  }
}
