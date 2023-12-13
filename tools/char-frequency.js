// node char-frequency.js < test.txt

class CharsFrequency {
    constructor() {
        this._histogram = new Map();
    }

    add(char) {
        if (this._histogram.has(char)) {
            let current = this._histogram.get(char)
            this._histogram.set(char, current + 1)
        } else {
            this._histogram.set(char, 1)
        }
    }

    get histogram() {
        return this._histogram;
    }

}

chars_frequency = new CharsFrequency();

process.stdin.setEncoding("utf-8");
process.stdin.on('data', function (text) {
    text = text.replace(/\s/g, '').toLowerCase();
    for (let char of text) {
        chars_frequency.add(char)
    }
});

console.log(chars_frequency.histogram);
