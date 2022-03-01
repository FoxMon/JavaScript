function repeat(n, f) {
  for(let i = 0; i < n; i++) {
    f(i);
  }
}

const callbackShow = function(num) {
  console.log(num);
}

const callbackCheck = function(num) {
  if(num % 2 == 1) {
    console.log(num);
  }
}

repeat(5, callbackShow);
repeat(5, callbackCheck);