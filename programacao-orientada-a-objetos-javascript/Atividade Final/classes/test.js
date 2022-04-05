import {Cachorro} from "./cachorro.js";
import {Gato} from "./gato.js";
import {Papagaio} from "./papagaio.js";

const cachorro = new Cachorro ("Canis lupus familiaris","Mammalia","Canidae", "cachorro");
console.log(cachorro);
console.log(cachorro.alimentar());
console.log(cachorro.falar());
console.log(cachorro.brincar());
console.log(cachorro.info());

const gato = new Gato ("Felis silvestris catus", "Mammalia", "Felidae", "gato");
console.log(gato);
console.log(gato.alimentar());
console.log(gato.falar());
console.log(gato.brincar());
console.log(gato.info());

const papagaio = new Papagaio ("Amazona", "Aves", "Psittacidae", "papagaio");
console.log(papagaio);
console.log(papagaio.alimentar());
console.log(papagaio.falar());
console.log(papagaio.brincar());
console.log(papagaio.info());
