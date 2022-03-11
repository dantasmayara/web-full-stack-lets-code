const pessoa = {
    profissao: "dev",
    hobby: "desenhar",
    sexo: "feminino",
    kcal: {
        min: 0,
        max: 7000,
        atual: 0
    },
    comer: function() {
        if (this.kcal.atual == this.kcal.max) {
            return "Você ingeriu 7.000 kcal e ganhou 1kg! Vá treinar!";
        } else {
            return ++this.kcal.atual;
        }
    },
    treinar: function() {
        if (this.kcal.atual == this.kcal.min) {
            return "Você gastou 7.000 kcal e eliminou 1kg! Parabéns!";
        } else {
            return --this.kcal.atual;
        }
    },
    trabalhar: function () {
        return "projetos";
    },
    pintar: function () {
        return "quadros";
    }
};

console.log (pessoa);