function func() {
  const num = 1;
  return function () {
    return num;
  };
}

const a = func()();

// expected what?
console.log(a);

function func2(a) {
  return function () {
    return a + 1;
  };
}

const b = func2(1)();
console.log(b);
