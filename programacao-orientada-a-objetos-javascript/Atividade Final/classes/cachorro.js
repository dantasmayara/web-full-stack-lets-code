import {Animal} from "./animal.js";

class Cachorro extends Animal{
    constructor (nomecientifico='', classe='', familia='', protetor=true){
        super(nomecientifico, classe, familia);
        this.#protetor = protetor;
        this.#animal = "Cachorro";
    }

    #protetor;
    #animal;

    alimentar(){
        return "Dog Chow";   
    };
    falar(){
        return "Au! Au!";
    };
    brincar(){
        return "Jogar e pegar a bolinha.";
    };
}

export {Cachorro};