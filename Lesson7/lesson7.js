const frameworks = ['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS ', 'Vue.js');
frameworks.splice(1, 0, 'CommonJS’');
let frameworksOf = frameworks.splice(3, 1);
frameworksOf.unshift('Это здесь лишнее ');
console.log(frameworks);
console.log(frameworksOf);


let array1 = [ -9, 2, 3, 0, -28, 'value'];
let result1 = array1.filter(el => el >= 0, el => typeof el === 'string');
let result12 = array1.filter(function (removeNegativeElements ) {
    return removeNegativeElements >= 0 || 'string';
});
console.log(result1);
console.log(result12);

let array2 = [-9, -21, -12];
let result2 = array2.filter(el => el > 0);
console.log(result2);

let array3 = ['-102', 102];
let result3 = array3.filter(function (removeNegativeElements ) {
    return removeNegativeElements > 0 || 'string';
});
console.log(result3);

let arrString = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false];
let newArr = arrString.filter(el => typeof el === 'string');
let getStringElements = newArr.shift();
console.log(newArr);

const array = [...Array(10)].map(() =>
  Math.floor(Math.random() *10));
  function sum (array) {
	  return _sum (array, array.length - 1);
  }
  function _sum (array, index) {
	  if (index === 0)
		  return array [0];
	  return array [index] + _sum(array, index-1);
  }
console.log(array);
console.log(sum(array));

let arr = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
let numArr = arr.filter(el => el === 10);
function sum2 (array) {
    return _sum2 (array, array.length - 1);
}
function _sum2 (array, index) {
    if (index === 0)
        return array [0];
    return array [index] + _sum2(array, index-1);
}
console.log(numArr);
console.log(sum2(numArr));

let arrfive = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];
let fiveArr = arrfive.filter(el => el > 5);
function rec (array) {
    return _rec(array, array.length - 1);
}
function _rec (array, index) {
    if (index === 0)
        return array;
    return array [index] && _rec(array, index -1);
}
console.log(rec(fiveArr));








