import {Animal} from "./animal.js";

class Papagaio extends Animal{
    constructor (nomecientifico='', classe='', familia='', animal=''){
        super(nomecientifico, classe, familia);
        this.#nomecientifico= "Amazona aestiva"
        this.#classe= "Aves";
        this.#familia= "Psittacidae";
        this.#animal = "papagaio";
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
    info() {
        return `O ${this.#animal} tem nome científico ${this.#nomecientifico}, é da classe dos ${this.#classe} 
        e família dos ${this.#familia}.`;
    }    
}

export {Papagaio};