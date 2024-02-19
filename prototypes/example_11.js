'use strict'

// Giochiamo con il prototype e facciamo in modo che quando creo un oggetto Rabbit in realtà mi venga restituita un'aquila.
// Però non funziona...
function Rabbit(name) {
    this.type = "Rabbit"
    this.name = name
    console.log("Rabbit", name)
}

let white_rabbit = new Rabbit('White');
console.log("White Rabbit type", white_rabbit.type) // Rabbit

function Eagle(name) {
    this.type = "Eagle"
    this.name = name
    console.log("Eagle", name)
}

Rabbit.prototype.constructor = Eagle;
console.log(Rabbit.prototype.constructor === Eagle)

let black_rabbit = new Rabbit('Black');
console.log("Black Rabbit type", black_rabbit.type) // Eagle

