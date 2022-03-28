let valor;
let valor1;
let oper;
let readlineSync = require('readline-sync');
oper = parseFloat(readlineSync.question("Qual operacao deseja efetuar (+) (-) (*) (/)? : \n"));
valor = parseFloat(readlineSync.question("Insira o primeiro numero: \n"));
valor1 = parseFloat(readlineSync.question("Insira o segundo numero: \n"));
    if (oper =="+") {
        return valor + valor1;
} else if {
    (oper == "-") {
        return valor - valor1;
    } else if {
        (oper == "*") {
            return valor * valor1;
        }
    } else if {
        (oper == "/") {
            return valor / valor1;
        }
    } else {
        console.log('Não foi possível calcular');
    }
    console.log('O resultado é', +oper); 