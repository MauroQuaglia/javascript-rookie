let promise1 = new Promise(function (resolve, reject) {
    // Il corpo di questa funzione si chiama Esecutore, che parte subito e termina chiamando la resolve o la reject.
    // Quando l’esecuzione termina, viene invocato resolve in caso di successo, oppure reject in caso di errore.

    // resolve(value) se il processo termina correttamente
    // reject(error) se si verifica un errore

    setTimeout(() => resolve('done'), 5000);
});

let promise3 = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('...DONE!'), 3000);
    setTimeout(() => reject(new Error("...ERROR!")), 3000);
});
promise3
    .then(result => alert(result))
    .catch(error => alert(error))


