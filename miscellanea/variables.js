let x;

x = 1; // Numero
x = 1.1; // Numero reale

x = null; // Nessun valore
console.log(x);

x = undefined; // Nessun valore, simile a null
console.log(x);

// book è un oggetto.
let book;
book = {
    topic: "JS",
    edition: 7
};

console.log(book.topic);
console.log(book['edition']);

// Posso definire una proprietà al volo.
book.author = "Pippo"
console.log(book.author);

// Aggiungo un oggetto vuoto
book.contents = {};

//console.log(book.contents.unknown1.unknown2); Questa genererebbe un errore.
console.log(book.contents.unknown1?.unknown2); // Questa ritorna undefined

// vero perché ab.. viene prima di ac..
console.log('abba' < 'acca')

let square = function (x) {
    return x * x;
}
console.log(square(2));

// ES6 arrow function
let cube = x => x * x * x;
console.log(cube(2));

p1 = {x: 0, y: 0};
p2 = {x: 3, y: 4};
points = [p1, p2]
points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];
    let x2x1 = p2.x - p1.x;
    let y2y1 = p2.y - p1.y;
    return Math.sqrt(x2x1 * x2x1 + y2y1 * y2y1);
}
console.log(points.dist());

function sum(array) {
    let result = 0;
    for (let x of array) {
        result += x;
    }
    return result;
}

console.log(sum([1, 2, 3, 4, 5]));

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distance(point) {
        let x2x1 = point.x - this.x;
        let y2y1 = point.y - this.y;
        return Math.sqrt(x2x1 * x2x1 + y2y1 * y2y1);
    }

    origin_distance() {
        return this.distance(new Point(0, 0))
    }
}

point1 = new Point(2, 2)
point2 = new Point(1, 1)
console.log(point1.distance(point2));
console.log(point1.origin_distance());