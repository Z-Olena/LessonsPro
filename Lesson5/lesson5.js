const array = [...Array(15)].map(() =>
  Math.floor(Math.random() *20));
console.log("Initial array:");
console.log(array);

console.log("---");
console.log(array.filter(el => el %3 == 0));

console.log("---");
 if(array.find(el => el >7))
    console.log(array.find(el => el >7));
 else
    console.log("All elements are <7");

console.log("---");
array.forEach(el =>console.log(el *2));

console.log("---");
console.log(array.reduce((previousValue,currentValue) =>
!(currentValue %2) ? currentValue + previousValue : previousValue
));

console.log("---");
console.log(array.shift());
console.log(array.pop());


console.log("---");
const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
let arrayDiff = arrayTwo.filter(n => arrayOne.indexOf(n) === -1);
console.log(arrayDiff);