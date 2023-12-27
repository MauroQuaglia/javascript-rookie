// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

'use strict';

function sortByBit(arr) {
    return arr.sort(function (a, b) {
        let counter = function count_bit(value) {
            return value.toString(2).split('').reduce((total, current) => (Number(total) + Number(current)));
        }

        let difference = counter(a) - counter(b);
        if (difference === 0)
            return a - b;
        else
            return difference
    });
}