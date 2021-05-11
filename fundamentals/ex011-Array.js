// Em JS os arrays são dinâmicos pois podem crescer ou diminuir
const value = [3.4,5.3,6.6,5.2];
console.log(value[0], value[2], value[3], value[4]);

// O JS é fracamente tipado e tb uma linguagem permissiva no value[4]
// mesmo não tendo um valor ele nao devolve um erro apenas mostra indefinito.

value[4] = 9.9;
console.log(value);

// Mostrar tamanho do array = length
console.log(value.length);

// Incluir novos valores no array = push array
value.push({id: 8}, false, null, 'exemplo');
console.log(value);

// Para retirar o ultimo elemento de um array e mostrar ele usa = pop
console.log(value.pop());
console.log(value)

//Para deletar um index de um array
delete value[0];
console.log(value);

// Array é do tipo object
console.log(typeof value);