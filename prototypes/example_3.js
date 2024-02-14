'use strict'

let living = {
    lives: true
}

let animal = {
    eats: true,
    walks() {
        return 'Walking...';
    },
    __proto__: living
}

let rabbit = {
    flies: false,
    __proto__: animal
}

console.log("Rabbit eats?", rabbit.eats);
console.log("Rabbit flies?", rabbit.flies);
console.log("Rabbit walks?", rabbit.walks());
console.log("Rabbit lives?", rabbit.lives);