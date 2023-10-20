"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 20,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hi!');
class Person {
    constructor(n) {
        this.name = 'Max';
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase);
    }
}
let add;
add = (n1, n2) => {
    return n1 + n2;
};
