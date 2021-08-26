```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let pesoExercicio = ex * 0.16;
  let pesoProva1 = p1 * 0.33;
  let pesoProva2 = p2 * 0.5;
  media = pesoExercicio + pesoProva1 + pesoProva2;
  if (media >= 9) return "A";
  else if (media < 9 && media >= 7.5) return "B";
  else if (media < 7.5 && media >= 6) return "C";
  else if (media < 6) return "D";
}
```
