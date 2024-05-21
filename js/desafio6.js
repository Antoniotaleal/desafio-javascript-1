function calculaTarifa(idade, tipoUsuario){

    if(idade > 60){
        return 2.50 * 30 / 100;
    };

    if(idade < 6){
        return 0;
    };
    
    if(tipoUsuario == 'estudante'){
        return 2.50 * 50 / 100;
    };

    if(tipoUsuario == 'regular'){
        return 2.50;
    };

}
    let tarifa = calculaTarifa(70, 'regular');
    console.log (tarifa);
    

    