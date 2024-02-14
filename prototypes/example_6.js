'use strict'

// Non ha importanza dove viene trovato il metodo: nell’oggetto o in un suo prototype.
// Quando invochiamo un metodo, this fa sempre riferimento all’oggetto che precede il punto.
// this non viene influenzato dai prototype.

let user = {
    name: 'John',
    surname: 'Doe',
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ')
    }
}

let admin = {
    isAdmin: true,
}
Object.setPrototypeOf(admin, user);


console.log("Default Admin name", admin.fullName); // John Doe
console.log("Default User name", user.fullName); // John Doe

admin.fullName = 'Mauro Quaglia'
console.log("Admin name", admin.fullName); // Mauro Quaglia
console.log("Default User name", user.fullName); // John Doe