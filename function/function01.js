// 익명 즉시 실행 함수
(function() {
  let a = 3;
  let b = 5;
  return a * b;
}());

// 기명 즉시 실행 함수
(function foo() {
  let a = 1;
  let b = 2;
  return a * b;
}());

// foo(); // error