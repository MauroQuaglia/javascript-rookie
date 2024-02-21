'use strict'

let animal = {
    eats: true
}
// Crea rabbit con prototype animal.
let rabbit = Object.create(animal)

console.log(Object.getPrototypeOf(rabbit) === animal)

Object.setPrototypeOf(rabbit, null)
console.log(Object.getPrototypeOf(rabbit) === null)