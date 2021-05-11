//  Operadores Lógicos

function tocar ( musica1, musica2){
    const ensaio = musica1 || musica2;
    const apresentacao = musica1 && musica2;
    const vontadeDeTocar = musica1 != musica2; // Operador exclusivo XOR
    const naoTocar = !ensaio; // Operador Unário

    return { ensaio, apresentacao, vontadeDeTocar, naoTocar}

}

console.log(tocar(true, true));
console.log('******************************');
console.log(tocar(true, false));
console.log('******************************');
console.log(tocar(false, true));
console.log('******************************');
console.log(tocar(false, false));
console.log('******************************');


