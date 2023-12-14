# Compatibilità
* `pre-ES5`: 
  * ha molte funzionalità legacy.
* `ES5`: 
  * Supportato da tutti i browser.
  * Per evitare di utilizzare funzionalità legacy bisogna specificare lo strict-mode: `'use strict';`
* `ES6`:
  * Punto di svolta con aggiunta di funzionalità importanti, classi, moduli.
  * Non supportato da tutti i browser.
  * Quando uso costrutti nuovi, per esempio in una classe, lo strict mode è attivo di default, in altri no.
* `ES2016`, `ES20xx`:
  * Sempre più funzionalità.
* In Definitiva: Se metto sempre `'use strict';` non sbaglio mai.
