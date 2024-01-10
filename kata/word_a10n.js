// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

'use strict'

function replacer(string) {
    let chars = string.length;
    if (chars > 3) {
        return string[0] + (chars - 2) + string[chars - 1];
    }
    return string;
}

function abbreviate(string) {
    const re1 = /(\w+)/g;

    let matches = string.match(re1);
    for (let match of matches) {
        let r = replacer(match)
        string = string.replace(match, r)
    }

    return string;
}

