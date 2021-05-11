// Com let podemos ter 3 tipos de escopo:

// - Escopo Global
// - Escopo de Local (declarada dentro de alguma função)
// - Escopo de Bloco (código que está entre chaves ({ }))

let num = 1;
{
    let num = 2;
    console.log('Dentro = ',num);
}
console.log('Fora = ',num);