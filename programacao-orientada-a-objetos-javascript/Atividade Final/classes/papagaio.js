import {Animal} from "./animal.js";

class Papagaio extends Animal{
    constructor (nomecientifico='', classe='', familia='', animal=''){
        super(nomecientifico, classe, familia);
        this.#animal = animal;
    }

    #animal;

    alimentar(){
        return "sementes";   
    };
    falar(){
        return "Lorô! Lorô!";
    };
    brincar(){
        return "Voar e pousar nos poleiros.";
    };   
}

export {Papagaio};