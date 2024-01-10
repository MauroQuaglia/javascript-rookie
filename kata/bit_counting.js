// https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript

'use strict';

var countBits = function (n) {
    return n.toString(2).split('').reduce((total, current) => (total + Number(current)), 0);
};
