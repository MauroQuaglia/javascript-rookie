var encryptThis = function (text) {
    let result = '';
    for (let token of text.split(' ')) {
        result += token.charCodeAt(0);
        if (token.length > 1) {
            let [x, y] = [token[1], token[token.length - 1]];
            token[1] = y;
            token[token.length - 1] = x;
            result += token;
        }
        result += ' ';
    }
    return result.trimEnd();
}
// A = unicodeA
// AB = unicodeA+B
// ABC = unicodeA+CB
// ABCD = unicodeA+DCB
//   assert.strictEqual(encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");