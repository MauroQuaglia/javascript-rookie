// Come si definivano le classi prima della keyword class

// Costruttore
function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    constructor: Range,
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    toString() {
        return `(${this.from}...${this.to})`;
    }
}

// Oggetto
let test = new Range(1, 3);
test.includes(2);
test.toString();