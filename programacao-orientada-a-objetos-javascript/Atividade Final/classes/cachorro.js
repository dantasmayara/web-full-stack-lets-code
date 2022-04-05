import {Animal} from "./animal.js";

class Cachorro extends Animal{
    constructor (nomecientifico='', classe='', familia='', animal=''){
        super(nomecientifico, classe, familia);
        this.#nomecientifico= "Canis lupus familiaris"
        this.#classe= "Mammalia";
        this.#familia= "Canidae";
        this.#animal = "cachorro";
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
    info() {
        return `O ${this.#animal} tem nome científico ${this.#nomecientifico}, é da classe dos ${this.#classe} 
        e família dos ${this.#familia}.`;
    } 
}

export {Cachorro};