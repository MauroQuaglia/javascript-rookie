// https://www.codewars.com/kata/52efefcbcdf57161d4000091

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