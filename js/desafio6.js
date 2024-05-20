function calculaTarifa(idade, tipoUsuario){
        switch(idade) { 
            case 'menor de 6 anos':
                return 0;
                break;
            case 'maior de 60 anos':
                return 1.75;
                break;
            case 'estudante':
                return 1.25;
                break;
            case 'regular':
                return 2.50;
        }
    }
    let tarifa = calculaTarifa('regular');
    console.log(tarifa)