// https://www.codewars.com/kata/526d42b6526963598d0004db/train/javascript

'use strict'

var CaesarCipher = function (shift) {
    const _ENCODE_PERMUTATION = new Map([
        ['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e'], ['e', 'f'], ['f', 'g'], ['g', 'h'], ['h', 'i'], ['i', 'j'], ['j', 'k'], ['k', 'l'], ['l', 'm'], ['m', 'n'],
        ['n', 'o'], ['o', 'p'], ['p', 'q'], ['q', 'r'], ['r', 's'], ['s', 't'], ['t', 'u'], ['u', 'v'], ['v', 'w'], ['w', 'x'], ['x', 'y'], ['y', 'z'], ['z', 'a'],
    ]);
    const _DECODE_PERMUTATION = new Map([
        ['b', 'a'], ['c', 'b'], ['d', 'c'], ['e', 'd'], ['f', 'e'], ['g', 'f'], ['h', 'g'], ['i', 'h'], ['j', 'i'], ['k', 'j'], ['l', 'k'], ['m', 'l'], ['n', 'm'],
        ['o', 'n'], ['p', 'o'], ['q', 'p'], ['r', 'q'], ['s', 'r'], ['t', 's'], ['u', 't'], ['v', 'u'], ['w', 'v'], ['x', 'w'], ['y', 'x'], ['z', 'y'], ['a', 'z'],
    ]);

    this.shift = shift;
    
    this.encode = function (text) {
        text = text.toLowerCase();

        if (this.shift <= 0) {
            return text.toUpperCase();
        }

        let result = '';
        for (let char of text) {
            result += _ENCODE_PERMUTATION.get(char) ?? char;
        }

        --this.shift;

        return this.encode(result);
    }
    
    this.decode = function (text) {
        text = text.toLowerCase();

        if (this.shift <= 0) {
            return text.toUpperCase();
        }

        let result = '';
        for (let char of text) {
            result += _DECODE_PERMUTATION.get(char) ?? char;
        }

        --this.shift;

        return this.decode(result);
    }
};


//var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
//c.encode('Codewars'); // returns 'HTIJBFWX'
//c.decode('BFKKQJX'); // returns 'WAFFLES'