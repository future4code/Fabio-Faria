// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort((a, b) => {
    return a - b;
  });
  return array;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = array.filter((par) => {
    return par % 2 === 0;
  });
  return pares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let pares = array.filter((par) => {
    return par % 2 === 0;
  });
  let paresElevadosADois = pares.map((par) => {
    return par * par;
  });
  return paresElevadosADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: true,
    diferenca: 0,
  };
  if (num1 > num2 && num1 % num2 === 0) {
    objeto.maiorNumero = num1;
    objeto.maiorDivisivelPorMenor = true;
    objeto.diferenca = num1 - num2;
  } else if (num2 > num1 && num2 % num1 === 0) {
    objeto.maiorNumero = num2;
    objeto.maiorDivisivelPorMenor = true;
    objeto.diferenca = num2 - num1;
  } else if (num1 > num2 && num1 % num2 !== 0) {
    objeto.maiorNumero = num1;
    objeto.maiorDivisivelPorMenor = false;
    objeto.diferenca = num1 - num2;
  } else if (num2 > num1 && num2 % num1 !== 0) {
    objeto.maiorNumero = num2;
    objeto.maiorDivisivelPorMenor = false;
    objeto.diferenca = num2 - num1;
  } else if (num1 === num2) {
    objeto.maiorNumero = num1;
    objeto.maiorDivisivelPorMenor = true;
    objeto.diferenca = 0;
  }
  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const primeirosNumerosPares = [];
  for (let i = 0; i < n; i++) {
    primeirosNumerosPares.push(i * 2);
  }
  return primeirosNumerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero";
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles";
  } else {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
