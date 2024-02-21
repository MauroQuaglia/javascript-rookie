'use strict'

// Copiare metodi da un oggetto a un altro...

let mySimilArray = {
    0: 'first',
    1: 'second',
    length: 2
}
mySimilArray.join = Array.prototype.join;

mySimilArray.join(); //first,second

// Funziona perché l’algoritmo integrato del metodo join necessita solamente degli indici corretti e della proprietà length.
// Non va a verificare se un oggetto sia effettivamente un array.
// Molti metodi integrati si comportano in questo modo.

// Un’altra possibilità è quella di ereditare di default obj.__proto__ da Array.prototype,
// quindi tutti i metodi di Array diventeranno automaticamente disponibili in obj.
