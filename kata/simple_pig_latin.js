// https://www.codewars.com/kata/520b9d2ad5c005041100000f

'use strict';

function pigIt(phrase) {
    if (phrase === '') return phrase;
    
    let result = '';
    let currentWords = phrase.split(' ');
    for (let word of currentWords) {
        if (word.match(/\W/)) {
            result += word;
        } else {
            let [a, ...rest] = word;
            result += (rest.join('') + a + 'ay ');
        }
    }
    
    return result.trimEnd();
}