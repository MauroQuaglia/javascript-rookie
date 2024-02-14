'use strict'

let animal = {
    eats: true,
    walks() {
        return 'Walking...';
    }
}

let rabbit = {
    flies: false,
    __proto__: animal
}

console.log("Rabbit eats?", rabbit.eats);
console.log("Rabbit flies?", rabbit.flies);
console.log("Rabbit walks?", rabbit.walks());