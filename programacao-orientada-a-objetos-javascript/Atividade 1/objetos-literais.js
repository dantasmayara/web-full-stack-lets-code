const pessoa = {};
pessoa.profissao = "dev";
pessoa.hobby = "desenhar";
pessoa.sexo = "feminino";

pessoa.trabalhar = function () {
    return "projetos";
};

pessoa.pintar = function () {
    return "quadros";
};

pessoa.treinar = function () {
    return "volei";
};

console.log(pessoa);
console.log(pessoa.sexo, pessoa["hobby"]);
console.log(pessoa.treinar(), pessoa["trabalhar"]());