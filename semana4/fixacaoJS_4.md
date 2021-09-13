```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesRepetidas = 0;
  let mensagem;
  for (let numero of arrayDeNumeros) {
    if (numero === numeroEscolhido) {
      vezesRepetidas++;
    }
  }
  if (vezesRepetidas === 0) {
    mensagem = `Número não encontrado`;
  } else if (vezesRepetidas > 1) {
    mensagem = `O número ${numeroEscolhido} aparece ${vezesRepetidas}x`;
  }
  return mensagem;
}
```
