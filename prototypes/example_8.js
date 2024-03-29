'use strict'

// Catena del prototype

let animal = {
    eats: true
}

let rabbit = {
    flies: false
}
Object.setPrototypeOf(rabbit, animal);

// Metodo "bello"
let __animal = Object.getPrototypeOf(rabbit);
console.log(__animal); // animal

let __object = Object.getPrototypeOf(__animal)
console.log(__object); // object

let __null = Object.getPrototypeOf(__object)
console.log(__null); // null

// Metodo "rapido"
console.log(rabbit.__proto__); // animal
console.log(rabbit.__proto__.__proto__); // object
console.log(rabbit.__proto__.__proto__.__proto__); // null
