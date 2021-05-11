// Armazenando uma funcao em uma variavel
const subt = function (a, b) {
    console.log(a - b);
}
subt(8, 3);

// Armazenando uma funcao arrow em uma variavel
const mult = (a, b) => {
    return a * b;
}
console.log(mult(5, 5));

// Retorno implícito
const divi = (a, b) => a / b;
console.log(divi(12, 6));

const phrase = a => console.log(a);
phrase('Olá function!')
