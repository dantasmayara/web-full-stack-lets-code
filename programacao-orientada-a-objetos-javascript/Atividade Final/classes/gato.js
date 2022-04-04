import {Animal} from "./animal.js";

class Gato extends Animal{
    constructor (nomecientifico='', classe='', familia='', independente=true){
        super(nomecientifico, classe, familia);
        this.#independente = independente;
        this.#animal = "Gato";
    }

    #independente;
    #animal;

    Gato.prototype.alimentar(){
        return "Whiskas Sachê";   
    };
    falar(){
        return "Miau! Miau!";
    };
    brincar(){
        return "Estourar bolhas de sabão.";
    };
}

export {Gato};