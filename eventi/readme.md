* Il modo corretto di aggiungere un evento a un elemento del DOM è usando `addEventListener` e per rimoverlo si usa `removeEventListener`.
* https://it.javascript.info/introduction-browser-events




DOMContentLoaded –> costruzione del DOM è stata completata.

Eventi:
sul tag html con on<event>: sconsigliato
separazione tra codice ed evento: onclick="action()": brutto
usando la proprietà DOM on<event>: elem.onclick = function() {}: brutto anche perché è sovrascrivibile
addEventListener(...): OK, siusa sepre questa!
{
once: false  (lo puoi eseguire più volte)
capture: false (lo fa durante il bubbling)
passive: false (chiama preventDefault(), così da bloccare  l'azione di default)
}