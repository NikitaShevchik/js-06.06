"use strict"

function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Nikita',
    age: 22,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 15
}

// person.logInfo.bind(lena, 'Frontend', 'IPhone')();
// person.logInfo.call(lena, 'Frontend', 'IPhone');
// person.logInfo.apply(lena, ['Frontend', 'IPhone']);

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n){
//     return arr.map(function(i) {
//         return i * n;
//     })
// }

Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n;
    })
}

// console.log(array.multBy(6));


