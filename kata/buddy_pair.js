// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

'use strict';

let history = new Map();

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
    if (history.has(number))
        return history.get(number)

    let result = [1];
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    let total = result.reduce((sum, current) => sum + current);
    history.set(number, total)

    return total;
}
