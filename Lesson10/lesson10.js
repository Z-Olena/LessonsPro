let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
      setTimeout(() => {
        console.log(this.message);
      }, 5000)
    }
 };
 let teaPlease = {
  message: 'Wanna some tea instead of coffee?'
 };
coffeeMachine.start();
coffeeMachine.start.bind(teaPlease)();
 
 

let result = 4;
function showNumber(num) {
  result += num;
  console.log(result);
  if (result === 10) {
    clearInterval(timeId);
  }
}
let timeId = setInterval(showNumber, 500, 1);

const concatStr = 'Hello, i am ';
console.log(concatStr.concat('Matt')); // Подскажите решение для такого варианта есть?

let user1 = {
  name: 'Matt',
  concatStr() {
    console.log(`Hallo, i am ${this.name}`)
  }
};
user1.concatStr();
let user2 = {
  name: 'Jhon',
  hello() {
    console.log(`Hallo, i am ${this.name}`)
  }
}
let hello = user1.concatStr.bind(user2);
hello();


function addBase(base) {
  return function (num) {
    return base + num;
  };
}
let addOne = addBase(1);
alert(addOne(5) + addOne(3)); 
// В alert выводится число 10. 
// 10 => в функции addBase выполняется действие - к num прибавляется значение из addBase(base)
// если поменять num 5 и 3 на другие значения, то к этим значениям прибавится 1: 6 + 4 = 12.
