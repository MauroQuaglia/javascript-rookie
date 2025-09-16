// Dimostriamo che il this dipende dal contesto di definizione e non da quello di esecuzione.

const g = () => {
    console.log(`Value of this: ${this}.`);
}

g(); // -> Window

let o = {}
o['myG'] = g;
o.myG(); // -> Window