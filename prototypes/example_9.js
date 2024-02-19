'use strict'

let animal = {
    eats: true
}

function Rabbit() {
    this.flies = false
}
Rabbit.prototype = animal;

let rabbit_1 = new Rabbit();
console.log("Rabbit proto", rabbit_1.__proto__); // animal
console.log("Rabbit eats?", rabbit_1.eats); // true
console.log("Rabbit flies?", rabbit_1.flies); // false

// Cambio il prototype
Rabbit.prototype = {
    eats: false
}

// Gli oggetti vecchi non vedono il cambio di prototype.
console.log("Rabbit 1 proto", rabbit_1.__proto__); // animal
console.log("Rabbit 1 eats?", rabbit_1.eats); // true
console.log("Rabbit 1 flies?", rabbit_1.flies); // false

// Gli oggetti nuovi vedono il cambio di prototype.
let rabbit_2 = new Rabbit();
console.log("Rabbit 2 proto", rabbit_2.__proto__); // animal
console.log("Rabbit 2 eats?", rabbit_2.eats); // false
console.log("Rabbit 2 flies?", rabbit_2.flies); // false

