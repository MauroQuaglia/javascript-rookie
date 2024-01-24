// https://www.codewars.com/kata/53c2c3e78d298dddda000460/train/javascript

'use strict';

Array.prototype.groupBy = function (fn) {
    if (!fn) {
        fn = (val) => val;
    }

    let result = {};
    for (let element of this) {
        let p = fn(element);
        if (result[p]) {
            result[p].push(element);
        } else {
            result[p] = [element];
        }
    }

    return result;
}