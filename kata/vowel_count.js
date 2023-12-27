// https://www.codewars.com/kata/54ff3102c1bad923760001f3

'use strict';

function getCount(str) {
    let result = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']

    let text = str.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            result++;
        }
    }
    return result;
}

function getCount_2(str) {
    let result = 0, vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char))
            result++;
    }
    return result;
}