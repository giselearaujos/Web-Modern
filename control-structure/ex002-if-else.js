// Expressões que tem apenas uma sentença não precisa por {}

const myBank = function (valueCash){
    if(valueCash >= 100){
        console.log('Client Premium');
    }else{
        console.log('Client Basic');
    }
}

myBank(200);
myBank(10);
myBank('Epa'); // Cuidado!! precisa tratar entradas assim.