// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

'use strict';

let history = new Map();

function buddy(start, limit) {
    for (let n = start; n <= limit; n++) {
        let sum_n = divisors_sum(n);
        let m = sum_n - 1;
        if (m > n && limit_sum(m, n) === (n + 1)) {
            return [n, m];
        }
    }
    return "Nothing";
}

function divisors_sum(number) {
    if (history.has(number)) return history.get(number);

    let total = 1;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            total += i;
        }
    }
    history.set(number, total)
    return total;
}

function limit_sum(number, limit) {
    if (history.has(number)) return history.get(number);

    let total = 1;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            total += i;
            if (total > limit + 1){
                return -1;
            }
        }
    }
    history.set(number, total)
    return total;
}