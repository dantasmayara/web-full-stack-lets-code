import {Animal} from "./animal.js";

class Papagaio extends Animal{
    constructor (nomecientifico='', classe='', familia='', cantor=true){
        super(nomecientifico, classe, familia);
        this.#cantor = cantor;
        this.#animal = "Papagaio";
    }

    #protetor;
    #animal;

    alimentar(){
        return "Sementes";   
    };
    falar(){
        return "Lorô! Lorô!";
    };
    brincar(){
        return "Voar e pousar nos poleiros.";
    };
}

export {Papagaio};