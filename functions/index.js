// Quando definisco una funzione devo stare attento a tre cose:
// Scope: codice + visibilità delle variabili
// this

// Lo scope viene valutato nel contesto di dove è stata definita la funzione originariamente.

function box1() {
    let var1 = 'var1';

    function innerBox() {
        console.log(`Value of this in innerBox: [${this}]`)
        console.log(`Value of scope in innerBox: [${var1}]`)
    }

    innerBox();
}


let objBox = {
    pro1: 'Mauro',
    innerBox: function () {
        // Qui dentro il torna objBox, perché il suo contesto è l'oggetto objBox.
        let a = 'a';
        //let self = this;

        function test() {
            console.log(`Value of scope in test: [${a}]`) // a
            console.log(`Value of scope in test: [${b}]`) // b
            console.log(`Value of this in innerBox: [${this}]`) //Window
            // console.log(`Value of this in innerBox: [${self}]`) // Object
            // Qui dentro il torna Window, perché il suo contest è la function innerBox.
            return this;
        }

        let b = 'b';

        return test(); //
    },
    pro2: 'Quaglia'
}