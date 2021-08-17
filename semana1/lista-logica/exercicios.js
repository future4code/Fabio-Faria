// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo"));
  const largura = Number(prompt("Digite a largura do retângulo"));
  const area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"));
  const idadeInput = Number(prompt("Digite sua idade"));
  const idade = anoAtual - idadeInput;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Oi qual seu nome?");
  const idade = Number(prompt("Qual sua idade?"));
  const email = prompt("Qual seu email?");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresPreferidas = [];
  const cor1 = prompt("Qual a primeira cor favorita?");
  const cor2 = prompt("Qual a segunda cor favorita?");
  const cor3 = prompt("Qual a terceira cor favorita?");

  coresPreferidas.push(cor1);
  coresPreferidas.push(cor2);
  coresPreferidas.push(cor3);

  console.log(coresPreferidas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const ingressos = custo / valorIngresso;
  return ingressos;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("ano atual:"));
  const anoNascimento = Number(prompt("ano de nascimento: "));
  const anoEmissao = Number(prompt("ano de emissao:"));
  const idade = anoAtual - anoNascimento;
  const tempoDeCarteira = anoAtual - anoEmissao;

  const renovarRG =
    (idade <= 20 && tempoDeCarteira >= 5) ||
    (idade > 20 && idade <= 50 && tempoDeCarteira >= 10) ||
    (idade > 50 && tempoDeCarteira >= 15);
  console.log(renovarRG);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) return true;
  return false;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Tem mais de 18 anos? Sim/Não").toLowerCase();
  const temEnsinoMedio = prompt(
    "Tem ensino medio? Sim/Nao"
  ).toLocaleLowerCase();
  const disponibilidade = prompt("Tem disponibilidade? Sim/Nao").toLowerCase();

  const valido =
    idade === "sim" && temEnsinoMedio === "sim" && disponibilidade === "sim";
  console.log(valido);
}
