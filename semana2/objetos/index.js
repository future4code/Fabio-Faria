// INTERPRETACAO

/* a console.log(filme.elenco[0]) - Matheus Nachtergaele 
    console.log(filme.elenco[filme.elenco.length - 1]) - Virginia Cavendish
    console.log(filme.transmissoesHoje[2]) - Canal: Globo / Horario 14h

    */

/* b 
console.log(cachorro) -  nome: Juca, idade: 3, raca: SRD
console.log(gato) - nome: Juba, idade: 3, raca: SRD
console.log(tartaruga) - nome: Jubo, idade: 3, raca: SRD

Sintaxe ... : Spread operators fazem a funcao de juntar elementos pertencentes a outro array ou objeto, junto ao objeto novo.


*/

//Exercicio 1

const doguinha = {
  nome: "Luna",
  apelidos: ["Luninha", "Bebe", "Bebeluga"],
};

const chamarDoguinha = (doguinha) => {
  console.log(
    `O meu nome é ${doguinha.nome}, mas também atendo por ${doguinha.apelidos[0]}, ${doguinha.apelidos[1]}, ou ${doguinha.apelidos[2]}`
  );
};

const novaDoguinha = {
  ...doguinha,
  apelidos: ["arrombadinha", "bebezuda", "safadinha"],
};

// Exercicio 2

const nome1 = {
  nome: "Fabio",
  idade: 33,
  profissao: "estudante",
};

const nome2 = {
  nome: "Nicole",
  idade: 32,
  profissao: "dev",
};

const valoresDoObjeto = (objeto) => {
  const valores = [
    objeto.nome,
    objeto.nome.length,
    objeto.idade,
    objeto.profissao,
  ];
  console.log(valores);
};

// EXERCICIOS 3

const carrinho = [];

const manga = {
  nome: "manga",
  isAvailable: true,
};

const banana = {
  nome: "banana",
  isAvailable: true,
};

const abacaxi = {
  nome: "abacaxi",
  isAvailable: true,
};

const comprarFrutas = (item, item2, item3) => {
  carrinho.push(item.nome, item2.nome, item3.nome);
  console.log(carrinho);
};

//Desafio 3

const controleDeEstoque = (fruta) => {
  fruta.isAvailable = false;
};

// DESAFIO

//1
const perguntaNome = prompt("Oi, qual seu nome?");
const perguntaIdade = Number(prompt("Qual sua idade?"));
const perguntaProfissao = prompt("Qual sua profissao?");

const dadosDaPessoa = {
  nome: perguntaNome,
  idade: perguntaIdade,
  profissao: perguntaProfissao,
};

console.log(dadosDaPessoa);
console.log(
  `Seu nome é ${dadosDaPessoa.nome}, você tem ${dadosDaPessoa.idade} anos e é ${dadosDaPessoa.profissao}`
);

// 2

const filmes1 = {
  nome: "Venom",
  ano: 2020,
};

const filmes2 = {
  nome: "Esquadrao Suicida",
  ano: 2021,
};

const lancamentoDoFilme = (filme1, filme2) => {
  console.log(
    `O primeiro filme foi lancado antes do segundo? ${filme1.ano > filme2.ano}`
  );
  console.log(
    `O segundo filme foi lancado antes do primeiro? ${filme2.ano > filme1.ano}`
  );
};
