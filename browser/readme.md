* window è l'oggetto da cui parte tutto:
  * DOM (oggetti della pagina)
  * BOM (oggetti del browser) 
* Link utili: 
  * https://software.hixie.ch/utilities/js/live-dom-viewer/
* Occhio che c'è differenza tra Element e Node:
  * Un Element è proprio un tag HTML: div, p, ...
  * Un node può essere qualsiasi cosa: un commento, test, un tag HTML, ..

* script: https://www.w3schools.com/tags/att_script_async.asp
* Sia async, che defer scaricano il js in parallelo al caricamento della pagina ma
*  con async appena ha finito di caricare lo esegue
*  con defer aspetta che tutta la pagina sia caricata e poi lo esegue
* in ogni caso il caricmaneto dello script è ottimizzato
* se non metto nulla il caricamento dello script non è parallelo ma blocca il caricamento della pagina