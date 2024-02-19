'use strict'

// Anche se non gli imposto il prototype, eredita quello di default.
function Rabbit(name) {
    this.name = name;
}

console.log("Prototype default", Rabbit.prototype); // constructor
console.log(Rabbit.prototype.constructor === Rabbit);


let rabbit = new Rabbit('White');
