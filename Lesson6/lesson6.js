console.log('//---1---//');

function fillArray(len, filler) {
     const array = [...Array(len)].map(() => filler);
    return array;
}
let ar = fillArray(10,'qwerty');
console.log(ar);


console.log('//---2---//');

let array = [0, 1, 2, null, undefined, 'qwerty', false];
function filterArray(array, ...args) {
    console.log(array, args);
    return array.filter(array => (!args.includes(array)));
}
let result = filterArray(array, false, undefined, '', 0, null);
console.log(result);

console.log('//---3---//');
function calcSum() {
    if (!arguments.length) {
        return 'No arguments';
    }
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(calcSum(0));
console.log(calcSum(1, 2, 3));
console.log(calcSum(5, 0, 10, 1, 5));

// let getSum = (a) => a;
// console.log(getSum(0));

console.log('//---4.1---//'); //вариант 1

function pipeFunction(x, q) {
    return function (y) {
        return x + q + y;
    };
}
const createPipe = pipeFunction('Hello ', 'some text you like ');
console.log(createPipe('Jhon'));

console.log('//---4.2---//'); //вариант 2

function someName(name = 'some text you like ', text = 'How are you?') {
    return 'Hello ' + name + text;
}
let text = someName();
console.log(text);

const pipeFunction2 = someName;
 pipeFunction2();

console.log('//---5---//');

const outputFunction = (text) => {
    console.log(text);
};
const outputFunctionAlert = (text) => {
    alert(text);
};
function adder(x, y, func1, func2) {
    const res = x + y;
    if (res < 10) {
        func1(res);
    } else {
        func2(res);
    }
}
adder('Olena ', 'Zaperchenko', outputFunction, outputFunctionAlert);
adder(5, 3, outputFunction, outputFunctionAlert);






// function createDec(){
//     const name = 'Hallo ';
//     return (x) => {
//         return name + x;
//     }
// }
// const dec = createDec();
//
// console.log(dec('Name')); // Hello Name

