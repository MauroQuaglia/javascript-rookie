# Unicode

1 bit = 0 o 1
1 nibble = 4 bit
1 byte = 8 bit

* Insieme di tutti i caratteri Unicode:
  * `[U+0000, U+10FFFF] = [U+0000, U+FFFF] U [U+10000, U+10FFFF]`
  * (Unicode) = Basic Multilingual Plane (caratteri più comuni) U Supplementary Planes (emoji, simboli, ...)
  * Con 21 bit si può rappresentare tutto.

* code-point = `U+XX...`
  * Le X vanno da 4 a 6 e rappresentano caratteri esadecimali (hex).
  * Identifica univocamente un carattere indipendentemente dalla rappresentazione in bit.

* Dato un carattere unicode `U+03C0` (pi greco) 
  * Per memorizzarlo o trasmetterlo servono codifiche come UTF-8, UTF-16, UTF-32, che trasformano il code point in sequenze di byte.
  * UTF32 -> uso 32 bit fissi per rappresentare un codepoint.
  * UTF16 -> uso 16 bit per __Basic Multilingual Plane__ e 32 per __Supplementary Planes__.
  * UTF8 -> uso da 1 a 4 byte in sequenze variabili.
  * In ogni caso riesco sempre a rappresenteare tutti i caratteri unicode.
* Per ogni carattere ASCII, que carattere ha anche la stessa rappresentazione in UTF-8 e livello di bit.
* Diciamo che ASCII è un sottoinsieme di UTF-8.

* NB:
 * `U+00E9` è il codice del codepoint .
 * `\u00E9` è la rappresentazione nella sintassi JavaScript di quel codepoint.

* NMB:
  * Unicode permette più modi di rappresentare lo stesso carattere, vedi `test.html` per `café`.
  * Quando vengono visualizzati sono uguali, ma a livello di JS sono diversi perché hanno rappresentazioni binarie diverse!
  * Se uso caratteri strani che vengono da fuori, o faccio cose strane meglio usare `normalize("NFC")`.