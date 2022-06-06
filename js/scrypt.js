"use strict"
/*---------
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
-----------*/
// console.log(array.multBy(6));


// function createCalc(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalc(33);
// calc()


/*--------
function createInc(n) {
    return function (num) {
        return n + num;
    }
}
const addOne = createInc(1);
const addTen = createInc(10);

console.log(addOne(9));
console.log(addOne(19));

console.log(addTen(9));
console.log(addTen(19));


function urlCreator(domain){
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const com = urlCreator('com');

console.log(com('youtube'))


function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const personOne = {
    name: 'Misha',
    age: 22,
    job: 'Hoe'
}
const personTwo = {
    name: 'Alex',
    age: 44,
    job: 'Homeless'
}

// logPerson.bind(personOne)()

function bind(pers, fn) {
    return function (...args) {
        fn.apply(pers, args)
    }
}

bind(personOne, logPerson)();
bind(personTwo, logPerson)();

// binde(personOne)();
// binde(personTwo)();



// const first = binde(logPerson);
// console.log(first(personOne))

// bind(personOne, logPerson);
// bind(personTwo, logPerson);

--------*/

console.log('Start 1');

console.log('Start 2');

setTimeout(function () {
    console.log('Start 3')
}, 0)