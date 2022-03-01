var x = 'global';

function foo() {
  var x = 'local';
  console.log(x);
}
foo();
console.log(x);

var x = 1;
if(true) {
  var x = 10;
}

console.log(x); // 10

var i = 10;
for(var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // 5

var y = 1;
function test() {
  var y = 10;
  test2();
}
function test2() {
  console.log(y);
}

test();
test2();