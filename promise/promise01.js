// Promise is a JavaScript object for asynchronous operation
// 1 -> state 2 -> producer & consumer
// state: pending -> fufilled or rejected
// producer(promise) vs consumer

// 1. producer, Promise => resolve, rejected. 
// When a new Promise is created -> params : executor runs automatically
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('do something...');
  setTimeout(() => {
    // resolve는 promise.then() 으로 던져짐
    resolve('foxmon');
    // reject(new Error('somethine wrong!!!'));
  }, 2000);
});

// 2. Consumer: then, catch, finally
// chaining
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num));