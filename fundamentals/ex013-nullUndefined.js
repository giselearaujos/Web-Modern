// A diferença começa em : Atribuição por Valor e Atribuição por referência

/* As variaveis elas guardam a atribuição no endereço da memória 

Quando criamos um objeto e atribuimos um valor a ele e depois atribuimos para outro 
objeto o mesmo valor, ambos iram apontar para o mesmo endereço de memória.
*/

const a = {name:'BOMBOM'};
console.log(a);
const b = a;
console.log(b);
b.name = 'ALFACE';
console.log(a);

/*Quando fazemos isso com tipos primitivos não acontece o mesmo,
  porque criamos uma cópia por valor =D
*/

let value // não inicializada
console.log(value);

value = null; //não aponta para nenhum espaço da memória - ausência de valor
console.log(value);
//console.log(value.toString())  ERRO!!!

const product = {};
console.log(product.preco);
console.log(product);

product.preco = 2.99;
console.log(product);
product.preco = undefined;// evitar atribuir undefined
console.log(!!product.preco);
console.log(product);

product.preco = null;
console.log(!!product.preco);
console.log(product)

