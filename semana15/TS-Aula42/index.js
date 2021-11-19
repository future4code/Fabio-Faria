//ex 1
var minhaString = "string aleatoria";
var meuNumero = 10;
var pessoa = {
    name: "Fabio",
    age: 34,
    corFavorita: "preto"
};
var cores;
(function (cores) {
    cores["AZUL"] = "Azul";
    cores["VERDE"] = "Verde";
    cores["AMARELO"] = "Amarelo";
    cores["PRETO"] = "Preto";
})(cores || (cores = {}));
//ex 2
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
