'use strict'

let animal = {
    eats: true,
    walks() {
        return 'Walking...';
    }
}

let rabbit = {
    flies: false
}
Object.setPrototypeOf(rabbit, animal);

console.log("Rabbit prototype?", Object.getPrototypeOf(rabbit));