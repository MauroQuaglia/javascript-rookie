// https://www.codewars.com/kata/65552e9756ea20197078a163

'use strict';

// 't'.charCodeAt(0)
// 'i'.charCodeAt(0)
// 'n'.charCodeAt(0)
// 'y'.charCodeAt(0)

function f() {
    return String.fromCharCode(116, 105, 110, 121);
}

// f=()=>'\x74\x69\x6e\x79';

// f=()=>String.fromCharCode(116,105,110,121);

f=()=>['','74','69','6e','79'].join('\\x')