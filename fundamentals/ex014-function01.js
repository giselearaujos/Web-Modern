// Funcao sem retorno
function sum(a, b) {
    console.log(a + b);
}
sum(5, 4); // 9
sum(8);    //Nan
sum();     //NaN



//Function com retorno
function sumReturn(a, b = 1) {
    return a + b;
}
console.log(sumReturn(5, 4));
console.log(sumReturn(9));
sumReturn(5,5);

// Return finaliza uma função e retorna um valor para onde essa função foi chamada
//console.log apenas exibe os valores em tela, inclusive o valor retornado pelo return