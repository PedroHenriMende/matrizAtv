/*Pedro Henrique Mendes De Jesus
6-Crie uma matriz 3x3 com entrada manual de números aceitando somente
números de 0 a 9. Em seguida, exiba a matriz na tela. */
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = [];
var linha = 3;
var coluna = 3;
for (var i = 0; i < linha; i++) {
    minhaMatriz[i] = [];
    for (var y = 0; y < coluna; y++) {
        var numero = parseInt(teclado("Digite o numero entre 0 a 9 que vai estar no endere\u00E7o [".concat(i + 1, ", ").concat(y + 1, "] da matriz: ")));
        if (numero < 10 && numero >= 0) {
            minhaMatriz[i][y] = numero;
        }
        else {
            y--;
        }
    }
}
console.log(minhaMatriz);

