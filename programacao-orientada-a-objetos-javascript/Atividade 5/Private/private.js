class TV {
    constructor(canal, volume, ligada) {
      this.#canal = canal,
      this.#ligada = ligada,
      this.#volume = volume
    }

    static msg = {
        "SINTONIZAR_EXCEP": `Não foi possível sintonizar o canal, pois a TV está desligada!`,
        "AUMENTAR_VOL_EXCEP": `Não foi possível aumentar o volume, pois a TV está desligada!`,
        "DIMINUIR_VOL_EXCEP": `Não foi possível diminuir o volume, pois a TV está desligada!`
    };

    #canal
    #volume
    #ligada

    get liga() {
        return this.#ligada = true;
    }

    get desliga() {
        return this.#ligada = false;
    }

    get mudaDeCanal(numero = this.#canal) {
        if (this.#ligada) return this.#canal = numero;
        throw new Error(TV.msg.SINTONIZAR_EXCEP);
    }

    get aumentaVolume() {
        if (this.#ligada) return this.#volume += 1;
        throw new Error(TV.msg.AUMENTAR_VOL_EXCEP);
    }

    get diminuiVolume() {
        if (this.#ligada) return this.#volume -= 1;
        throw new Error(TV.msg.DIMINUIR_VOL_EXCEP);
    }
}

const philips = new TV(5, 57, true);
console.log(philips);