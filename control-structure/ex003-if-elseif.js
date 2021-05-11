Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim;
}

const imprimirResultados = function (nota){
    if (nota.entre(9,10)){
        console.log('Quadro de Honra!!');
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado!!');
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação!!');
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado!!');
    } else {
        console.log('Nota inválida!!');
    }
}
imprimirResultados(10);  // Quadro de Honra!!
imprimirResultados(7);   // Aprovado!!
imprimirResultados(5);   // Recuperação !!
imprimirResultados(2);   // Reprovado!!
imprimirResultados(-1);  // Nota inválida!!
imprimirResultados(11);  // Nota inválida!!



function iLike (food){
    if (food === 'pizza'){
        console.log('I really like!!');
    } else if (food === 'salad'){
        console.log('so-so');
    } else if (food === 'banana'){
        console.log('I hate!!');
    } else {
        console.log('Invalid food');
    }
}
iLike('pizza');
iLike('salad');
iLike('banana');
iLike(' ');
iLike('soup');
