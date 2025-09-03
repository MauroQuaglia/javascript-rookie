# Global Object
* In un browser l'oggetto globale è __window__ o __globalThis__ (puntano alla stessa cosa).
* In node sono __global__ o __globalThis__ (puntano alla stessa cosa).
* Diciamo che __globalThis__ è universale e portabile.

----

# Statements di valutazione
* if
* if / else
* if / else if / else
* switch / case / break / default
  * Posso mettere anche return al posto di break se sono dentro a una funziona così esce subito.

----

#  Statements di Loop
## while(...) 
* Nessun ; finale.

## do / while(...);
* Ci vuole il ; finale.

## for(initialize; test; increment) 
* Non sempre sono strettamente necessari initialize, test e increment, anche se i ; li devo mettere.
* E' Live.

## for / of (ITERBALE)
* ES6
* lavora sugli oggetti iterabili (array, string, set, map, ...)
* E' Live
* Sulle stringhe lavora sui codepoint non sui caratteri UTF-16.

## for / in (OBJECT)
* Supportato da sempre.
* Se voglio ciclare sulle proprietà di un oggetto che non è iterabile
* Quindi posso usare:

## for await / of

## idendifier: / continue / break
* Serve per i jump.

# yield, return
* Sono simili
* yield (ES6) di solito si usa solo per i generatori 

----

# Eccezioni