* Dato element el, console.dir(el) è ottimo per esplorare proprietà.
* Mai usare cose del tipo innerHTML += perché il += fa una riscriottura completa, per cui ricrea tutto, scarica immagine ecc e poi appende la stringa che volevo aggiungere.
* hidden funziona alla stessa maniera di style="display:none" ma è più corto da scrivere 