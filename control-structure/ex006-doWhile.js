// Estabelece que pelo menos uma repetição será executada.
// Não é muito usual

let number = 0
do {
  console.log(`Number: ${number}.`)
  number++
} while (number <= 5)
console.log('__________________________')


const linguagens = [ 'JavaScript', 'Python', 'C#', 'PHP'];
let index = 0;

do {
  console.log(linguagens[index]);
  index++

} while (index < linguagens.length);
console.log('__________________________')