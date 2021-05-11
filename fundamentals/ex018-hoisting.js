// Variável declarada depois em var, no js ela sofre elevação

console.log('G = ', myname);// Aqui temos a criação da var com hoisting

var myname = 'isele';

console.log('G = ', myname);

// Fazendo isso com LET não acontece o msm