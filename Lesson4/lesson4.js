let array = ['455', 87.15, 'true', 'undefined', 7, 'null', 'false', {}, []];
 array[1] += 3
 array[4] += 3
for (let key in array) {
    console.log(key, array[key]);
}


let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alert('Введите число от 0 до 10');
let random = arr1[Math.floor(Math.random() * arr1.length)];
console.log("Random:", random);
console.log(arr1);
let arr2 = Object.assign(arr1);
    arr2[2] *=3;
    arr2[5] *=3;
    arr2[8] *=3;
console.log(arr2);

let student1 = {
    firstName: "Olena",
    lastName: "Zaperchenko",
    mark: "80"
}
console.log(student1);
let student2 = Object.assign({}, student1);
student2.mark = "100"
console.log(student2);
let student3 = Object.assign({}, student1);
student3.mark = "120"
console.log(student3);
let sred = (parseFloat(student1.mark)+parseFloat(student2.mark)+parseFloat(student3.mark))/3.0;
console.log(sred);



