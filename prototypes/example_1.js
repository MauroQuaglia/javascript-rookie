'use strict'

let animal = {
    eats: true
}

let rabbit = {
    flies: false
}
rabbit.__proto__ = animal;

console.log("Rabbit eats?", rabbit.eats);
console.log("Rabbit flies?", rabbit.flies);