'use strict';

// La cosa importante è che possiamo  usare un iterable dopo la keyword "of".

// La stringa è un iterable.
// In questo caso cicliamo su tutti i caratteri della stringa.
let string_iterable_1 = 'ciao';
for (let element of string_iterable_1) {
    console.log(element);
}
console.log('---------------------------------------------');


// ATTENZIONE: l'iterazione avviene su tutti gli 'unicode-codepoint' non sui caratteri 'UTF-16'.
let string_iterable_2 = 'I❤️J';
console.log(string_iterable_2.length); // => 4 (1 + 2 + 1) Per l' immagine servono due coppie UTF-16 e la lunghezza di una stringa si basa sul numero di gruppi di UTF-16.

// Il ciclo invece usa gli "unicode-codepoint" che in sostanza sono i singoli caratteri.
// Per cui il ciclo seguente avviene 3 volte (non 4), uno per ogni carattere.
// In realtà pare non sia così... però potrebbe dipendere dalla versione js del browser.
let sum = 0;
for (let element of string_iterable_2) {
    console.log(element);
    sum += 1;
}
console.log(`totale: ${sum}`);
console.log('---------------------------------------------');


let array_iterable = [1, 2, 3];
for (let element of array_iterable) {
    console.log(element);
}
console.log('---------------------------------------------');


// Se ho un oggetto, poi posso sfruttare tre tipologie di iterazione.
let my_obj = {a: 1, b: 2}
for (let key of Object.keys(my_obj)) {
    console.log(key);
}

for (let value of Object.values(my_obj)) {
    console.log(value);
}

for (let [key, value] of Object.entries(my_obj)) {
    console.log(key, value);
}