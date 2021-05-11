//Escopo Global
// EX: 01
{
    var global = 'Var global!'
}
  console.log(global);

// EX: 02
var num = 1;
{
    var num = 2;
    console.log('Fora = ', num)
}
console.log('Dentro = ', num)
  // Perigoso usar assim pq a var pode ser subscrita  

// Escopo Local 
function teste() {
    var local = 'Var local!!'
    console.log(local) // Aqui será o certo 
}
teste()
// console.log(local)  local is not defined  