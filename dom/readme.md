* Dato element el, console.dir(el) è ottimo per esplorare proprietà.
* Mai usare cose del tipo innerHTML += perché il += fa una riscriottura completa, per cui ricrea tutto, scarica immagine ecc e poi appende la stringa che volevo aggiungere.
* hidden funziona alla stessa maniera di style="display:none" ma è più corto da scrivere

* Si noti che le proprietà geometriche ad alto livello possono funzionare in modo leggermente differente se non c’è <!DOCTYPE HTML> nell’HTML. Si potrebbero verificare comportamenti imprevedibili.
* Nell’HTML moderno dovremmo sempre indicare il DOCTYPE