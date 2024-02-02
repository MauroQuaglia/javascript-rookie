function f() {
    console.log(`Value of this in f: ${this}.`);
}

f(); // Window

const h = () => {
    console.log(`Value of this in h: ${this}.`);
}

h(); // Window

// ------------------------------------------------------

'use strict'

function g() {
    console.log(`Value of this in g: ${this}.`);
}

g(); // Undefined

const t = () => {
    console.log(`Value of this in t: ${this}.`);
}

t(); // Window





