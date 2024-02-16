'use strict'

// for..in cicla su tutte le proprietà, anche quelle ereditate
// Ma eventualmente si possono scartare

let animal = {
    eats: true
}

let rabbit = {
    flies: false
}
Object.setPrototypeOf(rabbit, animal);


for (let property in rabbit) {
    console.log("Property:", property); // flies eats
}

for (let property in rabbit) {
    if (rabbit.hasOwnProperty(property)) {
        console.log("Rabbit property:", property); // flies
    } else {
        console.log("Animal property:", property); // eats
    }
}
