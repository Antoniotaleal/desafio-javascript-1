function calculator(num1, num2, oper){
    if(oper == 'soma'){
        return num1 + num2
    };
    if(oper == 'subtração'){
        return num1 - num2
    };
    if(oper == 'multiplicação'){
        return num1 * num2
    };
    if(oper == 'divisão'){
        return num1 / num2
    };
}
let resp = calculator(5, 3, 'soma');
console.log (resp);