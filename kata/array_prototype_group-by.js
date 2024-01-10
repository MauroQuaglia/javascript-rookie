// https://www.codewars.com/kata/53c2c3e78d298dddda000460/train/javascript

'use strict';

Array.prototype.groupBy = function () {
    let result = new Map();
    for (let element of this) {
        if (result.has(element)) {
            result.get(element).push(element);
        } else {
            result.set(element, [element])
        }
    }
    return result;
}


Array.prototype.groupBy = function (fn) {
    if (!fn) {
        fn = (val) => val;
    }

    let result = new Map();
    for (let element of this) {
        let key = fn(element);
        if (result.has(key)) {
            result.get(key).push(element);
        } else {
            result.set(key, [element])
        }
    }

    return result;
}

/*
    [1,2,3,2,4,1,5,1,6].groupBy()
{
    1: [1, 1, 1],
    2: [2, 2],
    3: [3],
    4: [4],
    5: [5],
    6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
    0: [3, 6],
    1: [1, 4, 1, 1],
    2: [2, 2, 5]
}*/
