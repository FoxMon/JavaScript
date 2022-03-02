class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() { 
    console.log(`Hi! My name is ${this.name}`); 
  }
  
  static sayHello() { 
    console.log('Hello!'); 
  }
}

Person.prototype.hi = function() {
  console.log(`Hi! My name is ${this.name}`);
}

// class는 hoisting 된다.
const me = new Person('Lee');
me.hi2 = function() {
  console.log("Hello Hello!");
}
me.sayHi();
Person.sayHello();
me.hi();
me.hi2();