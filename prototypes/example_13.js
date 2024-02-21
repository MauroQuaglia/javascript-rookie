'use strict'

function f() {
    alert("Hello!");
}

Function.prototype.defer = function (n) {
    setTimeout(this, n);
}

f.defer(1000); // mostra "Hello!" dopo 1 secondo
