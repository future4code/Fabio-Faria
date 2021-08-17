/* INTERPRETACAO 

1

A - Codigo pega um input do usuario pelo Prompt, armazena na variavel e faz uma condicional se o numero for divisivel por 2, passa. Senao, nao passa.
B - Imprime o 'passou no teste' apenas para numeros pares.
C- Imprime o 'nao passou no teste' apenas para numeros impares

2 -

A - codigo acima serve para otimizar casos de if/else utilizandos switch/case de maneira mais organizada e funcional
B - O preço da fruta ", maçā, " é ", "R$ ", 2.25
C - Todo codigo rodaria, independente dele colocar o nome desejado. Break serve para interromper uma vez que o codigo passe pelo valor desejado.

3-

A - Solicitando ao usuario um numero
B - Nada aconteceria, ja que nao foi declarado uma condicao para este caso.
C - Nada aconteceria. Para variavel ser acessada, dentro da condicao, aquela condicao tem que ser antigida. Se nao existe nenhuma condicao adicional e a unica que tem nao eh alcancada, nada acontece.

*/

// EXERCICIO

//1

const idadeUsuario = Number(prompt("Qual sua idade?"));
const idadeMinimaParaDirigir = 18;

if (idadeUsuario >= idadeMinimaParaDirigir) {
  console.log("Voce pode dirigir");
} else {
  console.log("Voce nao pode dirigir");
}

// 2

const horarioDeEstudo = prompt(
  "Qual seu horario de estudo? V - Vespertino / M - Matutino / N - Noturno"
).toUpperCase();

if (horarioDeEstudo === "M") {
  console.log("Bom dia!");
} else if (horarioDeEstudo === "V") {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}

// 3

switch (horarioDeEstudo) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;
  case "N":
    console.log("Boa noite!");
    break;
}

// 4

const generoFilme = prompt(
  "Qual genero do filme que vamos assistir?"
).toLocaleLowerCase();
const valorDoIngresso = Number(prompt("Qual valor do ingresso?"));

if (generoFilme === "fantasia" && valorDoIngresso <= 15) {
  const lanche = prompt("Qual lanche vamos pegar??");
  console.log(`Bom filme! e aproveite seu ${lanche}!`);
} else {
  console.log("Escolha outro filme :(");
}

// DESFAIO

const jogoSF = {
  categoria1: 13200,
  categoria2: 880,
  categoria3: 550,
  categoria4: 220,
};

const jogoDT = {
  categoria1: 660,
  categoria2: 440,
  categoria3: 330,
  categoria4: 170,
};

const jogoFI = {
  categoria1: 1980,
  categoria2: 1320,
  categoria3: 880,
  cateogria4: 330,
};

const realDolar = 4.1;
const nomeCompleto = prompt("Para comprar este ingresso, digite nome completo");
const quantidadeDeIngresso = Number(prompt("Quantos ingressos?"));
const categoriaDoJogo = Number(prompt("Qual categoria? 1, 2, 3 ou 4?"));
const tipoDeJogo = prompt("Qual jogo? IN - DO ?").toUpperCase();

const etapaDoJogo = prompt("Qual etapa? SF - DT - FI?").toUpperCase();

switch (quantidadeDeIngresso) {
  case "1":
    const tipoDeJogo = prompt("Qual jogo? IN - DO ?").toUpperCase();
    if (tipoDeJogo === "DO") {
    }
}
