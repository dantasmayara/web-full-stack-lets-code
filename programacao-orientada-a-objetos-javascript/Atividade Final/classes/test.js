import {Cachorro} from "./cachorro.js";
import {Gato} from "./gato.js";
import {Papagaio} from "./papagaio.js";

const cachorro = new Cachorro ("Canis lupus familiaris","Mammalia","Canidae");
console.log(cachorro);
console.log(cachorro.alimentar());
console.log(cachorro.falar());
console.log(cachorro.brincar());

const gato = new Gato ("Felis silvestris catus", "Mammalia", "Felidae");
console.log(gato);
console.log(gato.alimentar());
console.log(gato.falar());
console.log(gato.brincar());

const papagaio = new Papagaio ("Amazona", "Aves", "Psittacidae");
console.log(papagaio);
console.log(papagaio.alimentar());
console.log(papagaio.falar());
console.log(papagaio.brincar());
