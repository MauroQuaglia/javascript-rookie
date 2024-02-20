'use strict'

// Giochiamo con il prototype e facciamo in modo che quando creo un oggetto Rabbit in realtà mi venga restituita un'aquila.
// Però non funziona...
function Rabbit(name) {
    this.name = name
}

Rabbit.prototype.type = "Rabbit";

let white_rabbit = new Rabbit('White');
console.log("White Rabbit name", white_rabbit.name) // White
console.log("White Rabbit type", white_rabbit.type) // Rabbit

function Eagle(name) {
    this.name = name
}
Eagle.prototype.type = "Eagle";

Rabbit.prototype = Eagle.prototype

let black_rabbit = new Rabbit('Black');
console.log("Black Rabbit name", black_rabbit.name) // Black
console.log("Black Rabbit type", black_rabbit.type) // Eagle!

