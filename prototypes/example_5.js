'use strict'

let animal = {
    eats: true,
    walks() {
        return 'Walking...';
    }
}

let rabbit = {
    flies: false,
    walks() {
        return 'Jumping...';
    }
}
Object.setPrototypeOf(rabbit, animal);

console.log("Rabbit walks?", rabbit.walks());