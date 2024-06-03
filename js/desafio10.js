
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(NumerosPrimo(numero)) console.log(numero);
    }
}


function NumerosPrimo(numero){
    for(let divisor =2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}