const x = 10;
function outter() {
  const x = 100;
  function inner() {
    console.log(x);
  }
  inner();
}
outter();

const y = 1;
function foo() {
  const y = 10;
  foo2();
}

function foo2() {
  console.log(y);
}

// expected what?
foo();
// expected what?
foo2();