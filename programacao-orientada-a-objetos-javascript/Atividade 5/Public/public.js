class TV {
    constructor(canal, volume, ligada) {
      this.canal = canal,
      this.ligada = ligada,
      this.volume = volume
    }

    static msg = {
        "SINTONIZAR_EXCEP": `Não foi possível sintonizar o canal, pois a TV está desligada!`,
        "AUMENTAR_VOL_EXCEP": `Não foi possível aumentar o volume, pois a TV está desligada!`,
        "DIMINUIR_VOL_EXCEP": `Não foi possível diminuir o volume, pois a TV está desligada!`
    };

    liga() {
        return this.ligada = true;
    }

    desliga() {
        return this.ligada = false;
    }

    mudaDeCanal(numero = this.canal) {
        if (this.ligada) return this.canal = numero;
        throw new Error(TV.msg.SINTONIZAR_EXCEP);
    }

    aumentaVolume() {
        if (this.ligada) return this.volume += 1;
        throw new Error(TV.msg.AUMENTAR_VOL_EXCEP);
    }

    diminuiVolume() {
        if (this.ligada) return this.volume -= 1;
        throw new Error(TV.msg.DIMINUIR_VOL_EXCEP);
    }
}

const philips = new TV(5, 57, (ligada = true));
console.log(philips);
console.log(philips.aumentaVolume());
console.log(philips.mudaDeCanal(1));
console.log(philips.mudaDeCanal(8));
console.log(philips.mudaDeCanal());
console.log(philips);
console.log(philips.diminuiVolume());
console.log(philips.diminuiVolume());