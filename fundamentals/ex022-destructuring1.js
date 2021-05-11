// Novo recurso do ES2015

const people = {
    name: 'Gisele',
    age: 30,
    city: {
        street: 'Rock',
        number: 353,
    }
}
// {} = destructuring
// Tire dentro do obj people name e age
const { name, age } = people;
console.log(name, age)

//mudando o nome da variavel
const { name: n , age: a} = people;
console.log(n, a);

const { color, food = true } = people;
console.log(color, food);

const { city: { street, number, code }} = people;
console.log( street, number, code);