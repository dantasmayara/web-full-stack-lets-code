class Animal{
    constructor (nomecientifico='', classe='', familia=''){
        this.#nomecientifico = nomecientifico;
        this.#classe = classe;
        this.#familia = familia;
    }

    #nomecientifico;
    #classe;
    #familia;

    get nomecientifico(){
        return this.#nomecientifico;
    };
    get classe(){
        return this.#classe;
    };
    get familia(){
        return this.#familia;
    };

    alimentar(){
        return 'ração';   
    };
    falar(){
        return 'som do animal';
    };
    brincar(){
        return 'brincadeira';
    };
}

export {Animal};