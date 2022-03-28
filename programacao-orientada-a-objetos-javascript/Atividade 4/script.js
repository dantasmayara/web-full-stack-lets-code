const MODULE = (function () {
    var calculadora = { contador: 0 };

    calculadora.addContador = function(x, y) {
        calculadora.contador = x + y;
        return calculadora.contador;
    };

    calculadora.subContador = function(x, y) {
        calculadora.contador = x - y;
        return calculadora.contador;
    };

    calculadora.multContador = function(x, y) {
        calculadora.contador = x * y;
        return calculadora.contador;
    };

    calculadora.divContador = function(x, y) {
        if (y == 0) {
            alert("Nenhum número é divisível por zero, digite um número válido para realizar a divisão!");
        } else {
            calculadora.contador = x / y;
        }
        return calculadora.contador;
    };

    calculadora.historico = function () {
        return calculadora.contador;
    };

    calculadora.clear = function () {
        return 0;
    };

    return {
        mais: calculadora.addContador,
        menos: calculadora.subContador,
        vezes: calculadora.multContador,
        dividido: calculadora.divContador
    }
}) ();

console.log(MODULE);

let x = parseFloat(prompt("Insira o primeiro número:"));
let sinal = prompt("Insira o sinal da operação desejada: \n + (para somar) \n - (para subtrair) \n * (para multiplicar) \n / (para dividir)");
let y = parseFloat(prompt("Insira o segundo número:"));

if (sinal == "+") {
    alert(MODULE.mais(x, y));
}
if (sinal == "-") {
    alert(MODULE.menos(x, y));
}
if (sinal == "*") {
    alert(MODULE.vezes(x, y));
}

while (y == 0) {
    if (sinal == "/") {
        alert(MODULE.divContador(x, y));
        x = parseFloat(prompt("Insira o primeiro número:"));
        y = parseFloat(prompt("Insira o segundo número:"));
    }
}
alert(MODULE.divContador(x, y));