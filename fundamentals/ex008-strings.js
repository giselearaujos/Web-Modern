const myname = 'Gisele';
// function charAt pega uma letra segundo sua localização
console.log(myname.charAt(0));
console.log(myname.charAt(1));
// function charCodeAt mostra a codigo da string na tabela unicode
console.log(myname.charCodeAt(0));
// function que mostra o indice das letras 
console.log(myname.indexOf('G'));
// function que mostra a string a partir do indice eliminando as anteriores
console.log(myname.substring(3));
// function que seleciona onde começa e quantos caracteres iram aparecer
console.log(myname.substring(0,2));
//function concat
console.log('A '.concat(myname).concat(' está ON!'));
//function replace pode mudar algum caracter
console.log(myname.replace('G', 'Z'));
// function split dividir/separar 
console.log('BABEBIBOBU'.split(''));
