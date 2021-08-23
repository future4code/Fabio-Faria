//INTERPRETACAO
/*
A- No console sera exibido os objetos com nomes e apelidos, como originalmente.
B- Serao exibidos os nomes, de acordo com a regra item.nome. Buscando no objeto indicado.
C- Serao exibidos os apelidos, menos o apelido 'Chijo', ja que a regra inclui que ele nao deve ser filtrado.
*/

//EXERCICIO

//1

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

//a
const filtrarNomeDogues = (nomes) => {
  return nomes.nome;
};

const nomeDosDogues = pets.map(filtrarNomeDogues);
console.log(nomeDosDogues);

//b
const filtrarSalsichas = (racas) => racas.raca === "Salsicha";

const salsichas = pets.filter(filtrarSalsichas);
console.log(salsichas);

//c

const mensagemDesconto = pets
  .filter((raca) => raca.raca === "Poodle")
  .map((nome) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome.nome}`;
  });

console.log(mensagemDesconto);

// EXERCICIO 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//a

const nomeDeProdutos = produtos.map((produto) => {
  return produto.nome;
});

console.log(nomeDeProdutos);

//b

const produtosEmDesconto = produtos.map((produto) => {
  const produtoEDesconto = { nome: produto.nome, preco: produto.preco * 0.95 };
  return produtoEDesconto;
});

console.log(produtosEmDesconto);

//c

const apenasBebidas = produtos.filter(
  (categoria) => categoria.categoria === "Bebidas"
);

console.log(apenasBebidas);

//d

const apenasYpe = produtos.filter((ype) => ype.nome.includes("Ypê"));
console.log(apenasYpe);

//e

const mensagemDeComprar = apenasYpe.map((produto) => {
  return `Compre ${produto.nome} por apenas ${produto.preco}!`;
});

console.log(mensagemDeComprar);

// DESAFIO

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const pokmemonsEmOrdemAlfabetica = pokemons
  .sort((a, b) => {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
  })
  .map((nomes) => {
    return nomes.nome;
  });

console.log(pokmemonsEmOrdemAlfabetica);

// B

const tiposDePokemonsEmOrdem = (pokes) => {
  let tiposOrdenados = [];
  pokes.map((tipos) => {
    if (!tiposOrdenados.includes(tipos.tipo)) tiposOrdenados.push(tipos.tipo);
  });
  console.log(tiposOrdenados);
};

tiposDePokemonsEmOrdem(pokemons);
