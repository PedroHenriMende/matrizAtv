/* Pedro Henrique Mendes De Jesus
Fazer um programa que lê 10 valores, armazene 
em um array, e imprime o maior 
e o menor valores lidos.
*/
console.clear();

const teclado = require (`prompt-sync`)();
let array1: number [] = new Array(9);

for(let x =0; x <10; x++){
    array1[x] = parseFloat(teclado(`Insira os numeros ${x + 1}°:  `));
}

let maior: number = 0;
let menor: number = 0;

for(let i = 0; i <10; i++){
    if(array1[i] > maior){
        maior = array1[i];
        }
}

for(let i = 0; i <10; i++){
    if(array1[i] < menor){
        menor = array1[i];
    }
}

console.log(`============================`);
console.log(`|O Maior numero é: ${maior}|`);
console.log(`|O Menor numero é: ${menor}|`);
console.log(`============================`);
