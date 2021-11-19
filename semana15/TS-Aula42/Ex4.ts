type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a para transpilar usaria npx tsc nomeDoArquivo.ts / tsc nomeDoArquivo.ts
//b Sim, caso o arquivo fique dentro de alguma pasta especifica o processo seria: tsc path/nomeDoArquivo.ts
//c Sim, caso tenha mais de um arquivo basta separa-los por nome, ou usar um script feito no tsconfig para que rode todos, dentro da pasta build, ao mesmo tempo dando tsc ./build por exemplo
//d Sim, o arquivo do notion esta com es5 enquanto o que usamos em aula remete a versao atual es6
