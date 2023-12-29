// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

'use strict';

function buddy(start, limit) {
    let n_map = new Map();
    for (let n = start; n <= limit; n++) {
        n_map.set(n, divisors_sum(n));
    }

    for (let n of n_map.keys()) {
        let m = n_map.get(n) - 1;
        if ((m > n) && (divisors_sum(m) === (n + 1))) {
            return [n, m];
        }
    }

    return "Nothing";
}

function divisors_sum(number) {
    let result = [];
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) result.push(i);
    }
    return result.reduce((sum, current) => sum + current, 0);
}