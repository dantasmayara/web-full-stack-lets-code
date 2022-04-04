class TV {
    constructor(canal=0, volume=0, ligada=false) {
      this.emissoras = ["Cultura", "SBT", "Globo", "Record", "Band"];
      this.canal = this.emissoras;
      this.ligada = ligada;
      this.#volume = volume;
    }

    #volume;

    get volume() {
        return this.#volume;
    }

    set volume(valor) {
        return this.#volume = valor;
    }

    liga() {
        return (this.ligada = true);
    }

    desliga() {
        return (this.ligada = false);
    }

    mudaDeCanal() {
        let canalAberto = this.emissoras.indexOf(this.canal);
        if (this.ligada == true) {
            if (canalAberto == this.emissoras.length -1) {
                this.canal = this.emissoras[0];
                return this.canal;
            }
            this.canal = this.emissoras [canalAberto +1];
            return this.canal;
        } else {
            return "Necessário ligar a TV para mudar de canal.";
        }
    }

    aumentaVolume() {
        let max = 100;
        if (this.ligada == true) {
            if (this.#volume == max) {
                return(this.#volume = 100);
            } else {
                return (this.#volume += 1);
            }
        } else {        
            return "Necessário ligar a TV para aumentar o volume.";
        } 
    }

    diminuiVolume() {
        let min = 0;
        if (this.ligada == true) {
            if (this.#volume == min) {
                return(this.#volume = 0);
            } else {
                return (this.#volume -= 1);
            }
        } else {        
            return "Necessário ligar a TV para diminuir o volume.";
        }
    }
}

const philips = new TV("Globo", 57, (ligada = true));
console.log(philips);