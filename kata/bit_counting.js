'use strict';

var countBits = function (n) {
    return n.toString(2).split('').reduce((total, current) => (total + Number(current)), 0);
};