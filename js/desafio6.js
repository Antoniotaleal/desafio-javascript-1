function calculaTarifa(idade, tipoUsuario){

    switch(tipoUsuario, idade) { 
        case 'estudante':
            return 1.25;
            break;
        case 'regular':
            return 2.50;
        case 'menor de 6 anos':
                return 0;
                break;
        case 'maior de 60 anos':
                return 1.75;
    }
}
    let tarifaIdade = calculaTarifa('maior de 60 anos');
    console.log (tarifaIdade);
    let tarifaUsuario = calculaTarifa('');
    console.log (tarifaUsuario);
    

    