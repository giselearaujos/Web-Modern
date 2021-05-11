function aproveed(note) {
    if (note >= 7.0){
        console.log('Congratulation');
    }
}
// Só sera apresentado o resultado 8.5
aproveed(8.5); // Congratulation
aproveed(6.5);

function seForVerdadeEuFalo(valor) {
    if (valor){
        console.log('É verdade...' + valor);
    }
}
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
seForVerdadeEuFalo({});

