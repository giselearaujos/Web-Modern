let isAtivo = false;
console.log(isAtivo);
// mudança de valor na variavel
isAtivo = true;
console.log(isAtivo);

//mostrando no console true ou false
isAtivo = 1;
//negando podemos trabalhar um valor boolean
//duas !! gera um valor true apenas ! gera um valor false
console.log(!isAtivo);

//Tipos que se comportam como true 
console.log('os verdadeiros...');
console.log(!!5);
console.log(!!-6);
console.log(!!' ');
console.log(!!'testo');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Finalizando...');
console.log(!!('' || null || ' '));

// através do operador || é possível retornar um valor verdadeiro
let name = '';
console.log(name || 'Desconhecido');
