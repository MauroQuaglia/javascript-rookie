// Dimostriamo che il this dipende dal contesto di esecuzione e non da quello di definizione.

const f = function () {
    console.log(`Value of this: ${this}.`);
}

f(); // -> Window

let o = {}
o['myF'] = f;
o.myF(); // -> Object