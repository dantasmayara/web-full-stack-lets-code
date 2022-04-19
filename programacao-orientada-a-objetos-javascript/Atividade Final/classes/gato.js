import {Animal} from "./animal.js";

class Gato extends Animal{
    constructor (nomecientifico='', classe='', familia='', animal=''){
        super(nomecientifico, classe, familia);
        this.#animal = animal;
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
    interagir(){
        return `Chame o ${this.#animal} para alguma atividade!`
    }
}

export {Gato};