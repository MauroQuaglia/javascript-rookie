// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

'use strict';

function buddy(start, limit) {
    for (let n = start; n <= limit; n++) {
        let sum_n = divisors_sum(n);
        let m = sum_n - 1;
        if (m > n && divisors_sum(m) === (n + 1)) {
            return [n, m];
        }
    }
    return "Nothing";
}

function divisors_sum(number) {
    let total = 1;
    for (let i = Math.floor(number / 2); i > 1; i--) {
        if (number % i === 0) total += i;
    }
    return total;
}