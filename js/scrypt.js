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

const fnLenaInfoLog = person.logInfo.bind(lena);
fnLenaInfoLog('Frontend', 'IPhone')
person.logInfo('Dealer', 'Android')