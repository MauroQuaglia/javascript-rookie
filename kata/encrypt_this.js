// https://www.codewars.com/kata/5848565e273af816fb000449

'use strict';

var encryptThis = function (text) {
    let result = '';
    for (let token of text.split(' ')) {
        let [first, second, last, rest] = [token.charAt(0), token.charAt(1), token.slice(-1), token.slice(2, -1)];
        result += first.charCodeAt(0);

        if (token.length === 2)
            result += second;

        if (token.length > 2)
            result += last + rest + second;

        result += ' ';
    }
    return result.trimEnd();
}