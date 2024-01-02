// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

'use strict';

let history = new Map();

function buddy(start, limit) {
    for (let n = start; n <= limit; n++) {
        let sum_n = limit_sum(n);
        let m = sum_n - 1;
        if (m > n && limit_sum(m, n) === (n + 1)) {
            return [n, m];
        }

    }
    return "Nothing";
}

function limit_sum(number, limit = Infinity) {
    if (history.has(number)) return history.get(number);

    let total = 1;
    let j = Math.floor(number / 2);
    for (let i = j; i > 1; i--) {
        if (number % i === 0) {
            total += i;
            if (total > limit + 1) return -1;
        }
    }

    if (total > 1) history.set(number, total);
    return total;
}