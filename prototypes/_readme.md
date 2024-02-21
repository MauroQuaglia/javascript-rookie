* prototypal inheritance = ereditarietà dei prototype
* La proprietà "Prototype" è interna e nascosta, ma esistono diversi modi per poterla impostare.
  * Funzione: `.prototype` (proprietà prototype, F.prototype = { constructor: F } di default)
  * Oggetto: `.__proto__` (getter e setter per il prototype, non è il prototype!)
* Se a una Funzione F cambio il prototype, tutti gli oggetti creati prima del cambio di prototype avranno ancora le proprietà originarie.
* La proprietà "prototype" è speciale solo quando impostata su una funzione, altrimenti è una proprietà come un'altra.
* Il prototype può essere solo un `oggetto` o un `null`.
* Non posso ereditare da più oggetti.
* Il prototype è:
  * utilizzato solamente per la `lettura` delle proprietà.
  * `scrittura` e `rimozione` utilizzano direttamente l’oggetto.
* Il valore del `this`:
  * Non ha importanza dove viene trovato il metodo: nell’oggetto o in un suo prototype. Quando invochiamo un metodo, `this` fa sempre riferimento all’oggetto che precede il punto.
  * `admin.fullName` ---> il `this` è `admin`, non il prototype di `admin`.
  * `this` non viene influenzato dai prototype.
  
* Attenzione con i tipi primitivi:
```
let stringaPrimitiva = "Questo è un esempio di stringa primitiva";
console.log(typeof stringaPrimitiva); // "string"

let stringaOggetto = new String("Questo è un esempio di stringa oggetto");
console.log(typeof stringaOggetto); // "object"
```

# Best Practice
* La funzione `__proto__` che è un getter e setter del prototype è datata, si devono usare:
  * `Object.getPrototypeOf`
  * `Object.setPrototypeOf`
* Clonazione:
  * `let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));`