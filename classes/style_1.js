// Come si definivano le classi agli albori.

// Factory.
function range(from, to) {
    let prototype = range.methods;
    let obj = Object.create(prototype);

    obj.from = from;
    obj.to = to;

    return obj;
}

// Prototype
// Può essere un oggetto qualunque, torna più pulito definirlo come una proprietà della funzione range.
range.methods = {
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    toString() {
        return `(${this.from}...${this.to})`;
    }
}

// Oggetto
let test = range(1, 3);
test.includes(2);
test.toString();