# javascript-rookie
* Operatore di accesso condizionale `?.`
 * Restituisce `undefined` invece di generare un errore.
 * `contents.unknown1?.unknown2`: `unknown1` non è definita, la chiamata a `unknown2` invece di generare un errore da `undefined`.

* Il `this` si riferisce all'oggetto su cui il metodo è definito.
```
p1 = {x: 0, y: 0};
p2 = {x: 3, y: 4};
points = [p1, p2];

points.dist = function () {
  let p1 = this[0]; // Primo elemento dell'array.
  let p2 = this[1]; // Secondo elemento dell'array.
  let x2x1 = p2.x - p1.x;
  let y2y1 = p2.y - p1.y;
  return Math.sqrt(x2x1 * x2x1 + y2y1 * y2y1);
}
  
console.log(points.dist());
```