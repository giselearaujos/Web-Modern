// Object no JS é uma coleção de chave e valor.
const prod1 = {};
prod1.name = 'Stratocaster - JM';
prod1.value = 5500.00;
prod1['Desconto Agora'] = 0.50; // evitar atributos com espaço
console.log(prod1);

const prod2 = {
    name: 'Les Paul - Slash',
    value: 10.000,   
    obj: {
        drummer: 'PRS'
    }
}
console.log(prod2);

// Object é diferente de Json 
//Json é formato textual