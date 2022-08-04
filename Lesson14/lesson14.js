let promise = new Promise(function(resolve, reject) {

  setTimeout(() => resolve("Hello!"), 3000);
  setTimeout(() => reject("Error!"), 3000);
});
promise.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

let promise1 = new Promise((resolve, reject) => {
  const randomNumber = Math.ceil(Math.random() * 10);
setTimeout(() => {
    if(randomNumber % 2 == 0) {
      resolve('Вы получили четное число');
    } else {
      reject('Вы получили НЕчетное число');
  }
  }, 3500);
});
promise1.then((data) => {
  console.log(data);
  }).catch(error => {
    console.log(error);
  });

  let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  (async () => {
    console.log('first call');
    await delay(4000);
    console.log('second csll');
  })();

