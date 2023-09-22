const obj = {};

{
  obj.print = function (msg) {
    console.log(msg);
  };
}

{
  obj.sum = function (a, b) {
    return a + b;
  };
}

{
  obj.subtract = function (a, b) {
    return a - b;
  };
}

console.log(obj);
