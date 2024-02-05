// Dimostriamo che lo scope dipende dal contest di definizione
// Vale per tutte le funzioni.

let scope = 'global scope';

function checkFScope() {
    let scope = 'local scope';

    function f() {
        return scope;
    }

    return f();
}
checkFScope(); // local scope


function checkGScope() {
    let scope = 'local scope';

    function g() {
        return scope;
    }

    return g;
}
checkGScope()(); // local scope