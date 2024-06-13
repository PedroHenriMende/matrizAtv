/*Pedro Henrique Mendes De Jesus 
6-Crie uma matriz 3x3 com entrada manual de números aceitando somente
números de 0 a 9. Em seguida, exiba a matriz na tela. */

console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

let linha = 3;
let coluna = 3;

for (let i = 0; i < linha; i++) {
    minhaMatriz[i] = [];

    for (let y = 0; y < coluna; y++) {
        let numero: number = parseInt(teclado(`Digite o numero entre 0 a 9 que vai estar no endereço [${i+1}, ${y+1}] da matriz: `));
        if(numero < 10 && numero >= 0){
        minhaMatriz[i][y] = numero;
        }
        else{
            y--
        }
    }
}
console.log(minhaMatriz);
let maior: number = minhaMatriz[0][0];
let posicao: number[] = [0, 0];

for (let z = 0; z < linha; z++) {
  for (let x = 0; x < coluna; x++) {
    if (minhaMatriz[z][x] > maior) {
      maior = minhaMatriz[z][x];
      posicao = [z, x];
    }
  }
}

for (let z = 0; z < linha; z++) {
  for (let x = 0; x < coluna; x++) {
    if (minhaMatriz[z][x] > maior) {
      minhaMatriz[z][x] = maior;
      posicao[1] = z;
      posicao[0] = x;
    }
  }
}
console.log(`O maior elemento da matriz é: ${maior} e se encontra na posição [${posicao[0]}, ${posicao[1]}]`);
console.log(minhaMatriz);
