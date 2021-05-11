const myname = 'Gisele';
const simple = 'Olá ' + myname + '!';
const template = `
   Olá
   ${myname}
   !`; 

console.log(simple, template);

// expression
console.log(`5 + 5 = ${5 + 5}`);

// function
const up = text => text.toUpperCase();
console.log(`Atenção... ${up('tomatinho')}!!!`)