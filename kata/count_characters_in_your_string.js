'use strict';

function count(string) {
    let result = {};
    for (let char of string) {
        if (result[char])
            result[char]++;
        else
            result[char] = 1;
    }
    return result;
}


/*
test('', {});
test('a', {'a': 1});
test('ab', {'a': 1, 'b': 1});
test('aba', {'a': 2, 'b': 1});
test('ABC', {'A': 1, 'B': 1, 'C': 1});

*/