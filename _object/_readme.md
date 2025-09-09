# Oggetti
* `{}.__proto__ === Object.prototype`
* Ogni __property__ ha 5 attributi:
    * name:
    * value:
    * writable: // Il value può essere settato? (default: true)
    * enumerable: // La propery viene ritornata nel for/in? (default: true)
    * configurable: // Può essere cancellata? Posso modificare gli attributi? (default: true)
  
* 3 modi per creare un oggetto:
  * `{}`
  * `new Object()`
  * `Object.create` // particolare

* Ereditarietà:
 * `new Object()` -> eredita da `Object.prototype`
 * `new Array()` -> eredita da `Array.prototype`
 * `new Date()` -> eredita da `Date.prototype`

* Il `Prototype` di una funzione è quella parte che viene ereditata.

-----
* Costruzione oggetti ES5 vs ES6:
```
        // NB: hoisted
        function Prova1(name) {
            this.name = name;
            
            // Metodo di istanza, ma ogni oggetto ha il suo.
            this.sayHello1 = function () {
                return "sayHello1";
            }
        }
        
        // Sempre metodo di istanza, ma questo è condiviso perchè è nel prototype.
        // Inoltre questo è ereditabile.
        Prova1.prototype.sayHello2 = function () {
            return "sayHello2";
        }
```
```
        // NB: non hoisted
        class Prova2 {
            constructor(name) {
                this.name = name;

                // Metodo di istanza, ma ogni oggetto ha il suo.
                this.sayHello1 = function () {
                    return "sayHello1";
                }
            }

            // Sempre metodo di istanza, ma questo è condiviso perchè è nel prototype.
            // Inoltre questo è ereditabile.
            sayHello2() {
                return "sayHello1";
            }
        }
```