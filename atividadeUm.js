/*Pedro Henrique Mendes De Jesus
Ativade 1:*/
console.clear();
var teclado = require("prompt-sync")();
var minhaMatriz = []; //declarando Matriz //
var linha = 3; //variavel para controlar linha //
var coluna = 3; //variavel para controlar coluna //
// z percorre as linhas  
for (var z = 0; z < linha; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z  
    minhaMatriz[z] = [];
    for (var x = 0; x < coluna; x++) {
        // Atribuicaao via entrada de dados manual na variavel nome  
        var nome = teclado("Digite o nome que vai estar no endereco [".concat(z, ", ").concat(x, "]  sda matriz: ;"));
        // Atribui nome na minhaMatriz do endereço dado por z e x  
        minhaMatriz[z][x] = nome;
    }
}
// Imprime a matriz  
console.log(minhaMatriz);
