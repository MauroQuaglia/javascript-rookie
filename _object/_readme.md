# Oggetti
* {}.__proto__ === Object.prototype
* Ogni __property__ ha 5 attributi:
    * name:
    * value:
    * writable: // Il value può essere settato? (default: true)
    * enumerable: // La propery viene ritornata nel for/in? (default: true)
    * configurable: // Può essere cancellata? Posso modificare gli attributi? (default: true)
  
* 3 modi per creare un oggetto:
  * {}
  * new Object()
  * Object.create // particolare

* Ereditarietà:
 * new Object() -> eredita da Object.prototype
 * new Array() -> eredita da Array.prototype
 * new Date() -> eredita da Date.prototype