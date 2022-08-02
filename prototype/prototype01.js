class Person {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.log(`Hi! My name is ${this.name}`)
    }

    static sayHello() {
        console.log("Hello!")
    }
}

Person.prototype.hi = function () {
    console.log(`Hi! My name is ${this.name}`)
}

// class는 hoisting 된다.
const me = new Person("Lee")
me.hi2 = function () {
    console.log("Hello Hello!")
}
me.sayHi()
Person.sayHello()
me.hi()
me.hi2()

function A() {
    this.name = "A"
}
A.prototype.getA = function () {
    return this.name
}
const a = new A()
console.log(a.getA())

// 밑에는 그냥 내부함수 느낌인 것 같은데..
A.getA = function () {
    return "B"
}
const b = new A()
console.log(b.getA())
