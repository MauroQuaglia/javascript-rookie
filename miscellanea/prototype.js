// Ogni oggetto creato con {}, new, Object.create ha come prototype Object.

let a = {};
console.log(`Prototype di {}: ${a.__proto__}`)

let b = new Object();
console.log(`Prototype di new Object(): ${b.__proto__}`)

let c = Object.create(Object.prototype);
console.log(`Prototype di new Object.create(Object.prototype): ${c.__proto__}`)

// gli oggetti a, b, c ereditano delle proprietà da Object che è il loro protorype.
// a,b,c sono tre modi diversi di fare la stessa cosa.

// Mentre per a, b il prototype è di default Object, il caso c è più interessante perché permette di
// impostare il prototype passandolo da fuori. Per esempio posso creare un oggetto completamente vuoto.
let empty = Object.create(null);
console.log(`Prototype di new Object.create(null): ${empty.__proto__}`)

// Per esmepio posso creare un oggetto con il prototype di Date
let mq = Object.create(Date.prototype);

// Il prototype è una proprietà che torna l'oggett del prototype.
// Di fatto è una catena che termina con null.
let d = new Date();
d.__proto__ // Date
d.__proto__.__proto__ // Object
d.__proto__.__proto__.__proto__ // null
