import {Animal} from "./animal.js";

class Cachorro extends Animal{
    constructor (nomecientifico='', classe='', familia='', animal=''){
        super(nomecientifico, classe, familia);
        this.#animal = animal;
    }

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