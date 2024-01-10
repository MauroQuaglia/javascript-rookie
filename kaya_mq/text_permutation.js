/*
Let "a", "b", ..., "y", "z" be the 26 letters of the English alphabet.

    Let's define:

1-permutation:
"a" -> "b", "b" -> "c", ..., "y" -> "z", "z" -> "a"

2-permutation:
"a" -> "c", "b" -> "d", ..., "y" -> "a", "z" -> "b"

and so on.

    Can you calculate the n-permutation of a text?

    For example:
the 1-permutation of "Hello World!" is "Ifmmp Xpsme!".
    the 2-permutation of "Hello World!" is "Jgnnq Yqtnf!".

    Keep capital letters and punctuation.
*/

'use strict'

const PERMUTATION = new Map([
    ['a', 'b'], ['b', 'c'], ['c', 'd'], ['d', 'e'], ['e', 'f'], ['f', 'g'], ['g', 'h'], ['h', 'i'], ['i', 'j'], ['j', 'k'], ['k', 'l'], ['l', 'm'], ['m', 'n'],
    ['n', 'o'], ['o', 'p'], ['p', 'q'], ['q', 'r'], ['r', 's'], ['s', 't'], ['t', 'u'], ['u', 'v'], ['v', 'w'], ['w', 'x'], ['x', 'y'], ['y', 'z'], ['z', 'a'],
    ['A', 'B'], ['B', 'C'], ['C', 'D'], ['D', 'E'], ['E', 'F'], ['F', 'G'], ['G', 'H'], ['H', 'I'], ['I', 'J'], ['J', 'K'], ['K', 'L'], ['L', 'M'], ['M', 'N'],
    ['N', 'O'], ['O', 'P'], ['P', 'Q'], ['Q', 'R'], ['R', 'S'], ['S', 'T'], ['T', 'U'], ['U', 'V'], ['V', 'W'], ['W', 'X'], ['X', 'Y'], ['Y', 'Z'], ['Z', 'A']
]);

function permutation(n, text) {
    if (n <= 0)
        return text;

    let result = '';
    for (let char of text)
        result += PERMUTATION.get(char) ?? char;

    return permutation(--n, result);
}

/*
describe("Text Permutation", function () {
    it("Empty string", function () {
        assert.Equal(permutation(1, ''), '');
    });

    it("Single char", function () {
        assert.Equal(permutation(1, 'a'), 'b');
        assert.Equal(permutation(2, 'A'), 'C');
        assert.Equal(permutation(3, '!'), '!');
    });

    it("Single word", function () {
        assert.Equal(permutation(1, 'Hello'), 'Ifmmp');
        assert.Equal(permutation(1, 'World'), 'Yqtnf');
    });

    it("Text", function () {
        assert.Equal(permutation(1, 'Hello World!'), 'Ifmmp Xpsme!');
        assert.Equal(permutation(2, 'Hello World!'), 'Jgnnq Yqtnf!');
        assert.Equal(permutation(1, 'I ❤️ swimming...'), 'J ❤️ txjnnjoh...');
        assert.Equal(permutation(26, 'I ❤️ swimming...'), 'I ❤️ swimming...');
    });
});
*/