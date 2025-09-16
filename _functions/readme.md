## this
* Il valore di this dentro a una funzione dipende da dove dove è definita la funziona:
  * Se sono in un oggetto e obj.
  * Altrimenti è window (undefined in strict mode)

* `this` indica l’oggetto che chiama la funzione, non le variabili disponibili.
* Le variabili disponibili dipendono dallo `scope`, non da `this`.