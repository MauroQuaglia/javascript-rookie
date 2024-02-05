// Come si definiscono le classi ora

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    // Questi sono i metodi del prototype
    includes(x) {
        return this.from <= x && x <= this.to;
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

// Oggetto
let test = new Range(1, 3);
test.includes(2);
test.toString();