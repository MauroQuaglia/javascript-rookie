// Test: node chars-frequency.js < text.txt

'use strict';

class CharsFrequency {
    constructor() {
        this.histogram = new Map();
    }

    add(char) {
        if (this.histogram.has(char)) {
            let current = this.histogram.get(char)
            this.histogram.set(char, current + 1)
        } else {
            this.histogram.set(char, 1)
        }
    }

    total_count() {
        return [...this.histogram.values()].reduce((total, current) => (total + current));
    }

    chars_histogram() {
        let chars_histogram = new Map();
        let total = this.total_count();

        for (let key of this.histogram.keys()) {
            let percentage = ((this.histogram.get(key) / total) * 100).toFixed(2);
            chars_histogram.set(key, percentage);
        }

        return chars_histogram;
    }
}

let chars_frequency = new CharsFrequency();

process.stdin.setEncoding("utf-8");
process.stdin.on('data', function (text) {
    text = text.match(/[a-zA-Z0-9]+/g).join('').toUpperCase();
    for (let char of text) {
        chars_frequency.add(char)
    }
});

process.stdin.on('end', function () {
    let chars_histogram_array = [...chars_frequency.chars_histogram()];
    chars_histogram_array.sort((a, b) => b[1] - a[1]);

    for (let char of chars_histogram_array) {
        console.log(`${char[0]}: ${'#'.repeat(char[1])} ${char[1]}%`);
    }
});
