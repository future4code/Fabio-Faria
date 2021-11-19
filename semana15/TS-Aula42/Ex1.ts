//ex 1

const minhaString: string = "string aleatoria"
const meuNumero: number = 10

const pessoa: {name: string, age: number, corFavorita: string} = {
    name: "Fabio",
    age: 34,
    corFavorita: "preto"
}

type person2 = {
    name: 'Nicole',
    age: 32,
    corFavorita: 'azul'
}

type person3 = {
    name: 'Bilbo',
    age: 3,
    corFavorita: 'verde'
}

type person4 = {
    name: 'Luninha',
    age: 5,
    corFavorita: 'amarelo'
    
}

enum cores {
    AZUL = 'Azul',
    VERDE = 'Verde',
    AMARELO = 'Amarelo',
    PRETO = 'Preto'
}

type PersonA = {
    name: string,
    age: number,
    corFavorita: cores.AMARELO
}


