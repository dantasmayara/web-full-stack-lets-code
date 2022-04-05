import {Animal} from "./animal.js";

class Gato extends Animal{
    constructor (nomecientifico='', classe='', familia='', animal=''){
        super(nomecientifico, classe, familia);
        this.#nomecientifico= "Felis silvestris catus"
        this.#classe= "Mammalia";
        this.#familia= "Felidae";
        this.#animal = "gato";
    }

    #animal;

    alimentar(){
        return "Whiskas Sachê";   
    };
    falar(){
        return "Miau! Miau!";
    };
    brincar(){
        return "Estourar bolhas de sabão.";
    };
    info() {
        return `O ${this.#animal} tem nome científico ${this.#nomecientifico}, é da classe dos ${this.#classe} 
        e família dos ${this.#familia}.`;
    } 
}

export {Gato};