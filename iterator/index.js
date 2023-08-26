const scores = ["A", "B", "C", "D"];

// ES6에서 새로운 Loop가 소개
// for...of => for...of Loop는 [Iterable] object를 Loop 돌림
// Array, Strings, Maps, Sets는 Iterable

for (const score of scores) {
  console.log(score);
}

// Symbol.iterator
// Symbol.iterator는 object의 내부 iterator에 접근
// Symbol.iterator 안에는 next() 메소드가 있음
// next안에는 { value: 1, done: false } 프로퍼티가 있음
// 마지막 Loop인 경우에는? { value: undefined, done: true }
const numbers = [1, 2, 3, 4, 5];
const iterators = numbers[Symbol.iterator]();
const next = iterators.next();
console.log(next);
