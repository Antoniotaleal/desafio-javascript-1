function calculadora(num1, num2, oper){
    switch(oper) { 
        case 'soma':  
            return num1 + num2;
        break;
        case 'subtração':
            return num1 - num2;
        break;
        case 'multiplicação': 
            return num1 * num2;
        break;
        case 'divisão': 
            return num1 / num2;
        }
}
