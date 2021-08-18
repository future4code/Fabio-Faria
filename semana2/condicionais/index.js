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

//DESFAIO

const jogoSF = {
  categoria1: 1320,
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
  categoria4: 330,
};

const nomeCompleto = prompt("Qual seu nome completo?");
const tipoDoJogo = prompt("Jogo INTERNACIONAL ou DOMESTICO");
const etapaJogo = prompt("Qual etapa gostaria? SF - DT - FI");
const quantidadeIngressos = Number(prompt("Quantos ingressos gostaria?"));
let ingressoInt = 0;
// Etapa SF
if (etapaJogo === "SF") {
  const categoriaDoJogo = Number(prompt("Qual categoria de 1 a 4 gostaria?"));
  if (categoriaDoJogo === 1) {
    let valorIngresso = jogoSF.categoria1;
    let custo = quantidadeIngressos * jogoSF.categoria1;
    if (tipoDoJogo === "Domestico") {
      console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto} 
    Tipo do jogo:  ${tipoDoJogo} 
    Etapa do jogo:  ${etapaJogo} 
    Categoria:  ${categoriaDoJogo} 
    Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${valorIngresso}
    Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoSF.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto} 
    Tipo do jogo:  ${tipoDoJogo} 
    Etapa do jogo:  ${etapaJogo} 
    Categoria:  ${categoriaDoJogo} 
    Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${ingressoInt}
    Valor total:  R$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 2) {
    let valorIngresso = jogoSF.categoria2;
    let custo = quantidadeIngressos * jogoSF.categoria2;
    if (tipoDoJogo === "Domestico") {
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  R$ ${valorIngresso}
      Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoSF.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  R$ ${ingressoInt}
      Valor total:  R$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 3) {
    let valorIngresso = jogoSF.categoria3;

    let custo = quantidadeIngressos * jogoSF.categoria3;
    if (tipoDoJogo === "Domestico") {
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  R$ ${valorIngresso}
      Valor total:  US$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoSF.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  US$ ${ingressoInt}
      Valor total:  US$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 4) {
    let valorIngresso = jogoSF.categoria4;

    let custo = quantidadeIngressos * jogoSF.categoria4;
    if (tipoDoJogo === "Domestico") {
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  R$ ${valorIngresso}
      Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoSF.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  US$ ${ingressoInt}
      Valor total:  US$ ${custoInt}`);
    }
  }

  //Etapa DT
} else if (etapaJogo === "DT") {
  const categoriaDoJogo = Number(prompt("Qual categoria de 1 a 4 gostaria?"));
  if (categoriaDoJogo === 1) {
    let valorIngresso = jogoDT.categoria1;
    let custo = quantidadeIngressos * jogoDT.categoria1;

    if (tipoDoJogo === "Domestico") {
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  R$ ${valorIngresso}
      Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoSF.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
      ---Dados da compra--- 
      Nome do cliente: ${nomeCompleto} 
      Tipo do jogo:  ${tipoDoJogo} 
      Etapa do jogo:  ${etapaJogo} 
      Categoria:  ${categoriaDoJogo} 
      Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
      ---Valores--- 
      Valor do ingresso:  US$ ${ingressoInt}
      Valor total:  US$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 2) {
    let valorIngresso = jogoDT.categoria2;

    let custo = quantidadeIngressos * jogoDT.categoria2;
    if (tipoDoJogo === "Domestico") {
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoDT.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  US$ ${ingressoInt}
        Valor total:  US$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 3) {
    let valorIngresso = jogoDT.categoria3;

    let custo = quantidadeIngressos * jogoDT.categoria3;
    console.log(`
    ---Dados da compra--- 
    Nome do cliente: ${nomeCompleto} 
    Tipo do jogo:  ${tipoDoJogo} 
    Etapa do jogo:  ${etapaJogo} 
    Categoria:  ${categoriaDoJogo} 
    Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
    ---Valores--- 
    Valor do ingresso:  R$ ${valorIngresso}
    Valor total:  R$ ${custo}`);
  } else if (categoriaDoJogo === 4) {
    let valorIngresso = jogoDT.categoria4;

    let custo = quantidadeIngressos * jogoDT.categoria4;
    if (tipoDoJogo === "Domestico") {
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoDT.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  US$ ${ingressoInt}
        Valor total:  US$ ${custoInt}`);
    }
  }
} else if (etapaJogo === "FI") {
  const categoriaDoJogo = Number(prompt("Qual categoria de 1 a 4 gostaria?"));
  if (categoriaDoJogo === 1) {
    let valorIngresso = jogoFI.categoria1;

    let custo = quantidadeIngressos * jogoFI.categoria1;
    if (tipoDoJogo === "Domestico") {
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoFI.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  US$ ${ingressoInt}
        Valor total:  US$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 2) {
    let valorIngresso = jogoFI.categoria2;

    let custo = quantidadeIngressos * jogoFI.categoria2;
    if (tipoDoJogo === "Domestico") {
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoFI.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  US$ ${ingressoInt}
        Valor total:  US$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 3) {
    let valorIngresso = jogoFI.categoria3;

    let custo = quantidadeIngressos * jogoFI.categoria3;
    if (tipoDoJogo === "Domestico") {
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoFI.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  US$ ${ingressoInt}
        Valor total:  US$ ${custoInt}`);
    }
  } else if (categoriaDoJogo === 4) {
    let valorIngresso = jogoFI.categoria4;

    let custo = quantidadeIngressos * jogoFI.categoria4;
    if (tipoDoJogo === "Domestico") {
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  R$ ${valorIngresso}
        Valor total:  R$ ${custo}`);
    } else if (tipoDoJogo === "Internacional") {
      ingressoInt = jogoFI.categoria1 * 4.1;
      custoInt = custo * 4.1;
      console.log(`
        ---Dados da compra--- 
        Nome do cliente: ${nomeCompleto} 
        Tipo do jogo:  ${tipoDoJogo} 
        Etapa do jogo:  ${etapaJogo} 
        Categoria:  ${categoriaDoJogo} 
        Quantidade de Ingressos:  ${quantidadeIngressos} ingressos 
        ---Valores--- 
        Valor do ingresso:  US$ ${ingressoInt}
        Valor total:  US$ ${custoInt}`);
    }
  }
}
