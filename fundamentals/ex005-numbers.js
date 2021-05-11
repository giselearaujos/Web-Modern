const peso1 = 1.0;

//Possibilidade de declarar um número com a função Number
const peso2 = Number(2);

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
console.log(typeof Number)

const avaliacao1 = 8.659;
const avaliacao2 = 7.324;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2); 

console.log(media.toFixed(2));
// toString(2) mostra o valor em binário.
console.log(media.toString(2));
console.log(typeof media)
