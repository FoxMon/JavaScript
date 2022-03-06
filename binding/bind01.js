function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

// window
console.log(getThisBinding());

console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));

function getThisBinding2() {
  console.log(arguments);
  return this;
}

const thisArg2 = { a: 1 };

// getThisBinding2를 호추랗면서 인수로 전달한 객체를 함수의 this에 바인딩함
// apply는 배열 형태로 전달
console.log(getThisBinding2.apply(thisArg2, [1, 2, 3]));
// call은 걍 숫자 리스트로 전달함
console.log(getThisBinding2.call(thisArg2, 1, 2, 3));

function getThisBinding3() {
  return this;
}

const thisArg3 = { a: 1 };

// this binding, bind함수 -> 호출 ㄴㄴ
console.log(getThisBinding3.bind(thisArg3));
// 따라서 명시적 호출
console.log(getThisBinding3.bind(thisArg3)());

const person = {
  name: 'Kim',
  value: 27,
  getValue: function() {
    return this.value;
  }
};

function getValue2() {
  return this.value;
}

// expected: 27
console.log(person.getValue());

// expected: what?
console.log(person.getValue.call(this));

// expected: undefined
console.log(getValue2());

// object binding -> expected: what?
const test = getValue2.bind(person);
console.log(test());
console.log(getValue2.call(person));