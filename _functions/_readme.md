## this
* `this` indica l’oggetto che chiama la funzione, non le variabili disponibili.
  * Di solito è __obj__ se la funzione è chiamata su un oggetto (metodo).
  * Se non è chiamata su un oggetto il `this` vale:
    * __window__ non in strict mode.
    * __undefined__ in strict mode.
    * Occhio però che sulle arrow function anche in strict mode vale __window__.
    * Per le funzioni innestate può essere utile usare l'arrow function, vedi esempio `2.1`.
      * Così non serve usare il trucco del `let self = this`.

## scope
* Le variabili disponibili dipendono dallo `scope`, non da `this`. 
  * Lo `scope` è indipendente dal `this`.
  * Lo `scope` dipende da dove è stata definita originariamente la funzione.

## prototype
* Le funzioni definite normalmente hanno un prototype: `f.__proto__ === Function.prototype`
* Le arrow function invece non hanno un prototype: `undefined`.

## Invocazione
* Oltre alla classiche `()`, si può invocare anche con `call` e `apply`.