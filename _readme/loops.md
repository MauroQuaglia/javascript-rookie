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
* Sulle stringhe lavora sui codepoint non sui caratteri UTF-16.
* Se voglio ciclare sulle proprietà di un oggetto posso usare for/in ma in genere si preferisce usare il for/of con Object.keys(o).
  * Che cicla sulle proprietà marcate come __enumerable__ dell'oggetto, non quelle ereditate.
  * Di default metodi e proprietà che metto io sono tutte __enumerable__.

## for / in (OBJECT)
* Supportato da sempre.
* Se voglio ciclare sulle proprietà di un oggetto.
* Cicla su tutte le proprietà (anche ereditate) che sono __enumerable__.
* Di default metodi e proprietà che metto io sono tutte __enumerable__.

## for await / of

## idendifier: / continue / break
* Serve per i jump.

# yield, return
* Sono simili
* yield (ES6) di solito si usa solo per i generatori

# Note
* Occhio che il while e il for/of non sono del tutto traducibili uno nell'altro anche se apparentemente sembra così.
* La differenza sta nel diverso comportamento della keyword `continue`.