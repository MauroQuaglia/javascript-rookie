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