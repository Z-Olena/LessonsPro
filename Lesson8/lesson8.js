console.log('---1---')
let triangle = {
    getPerimeter() {
        return this.aSide + this.bSide + this.cSide;
    },
    setValues() {
        this.aSide = +prompt('aSide?', 0);
        this.bSide = +prompt('bSide?', 0);
        this.cSide = +prompt('cSide?', 0);
    },
    isEqualSides() {
        return this.aSide, this.bSide, this.cSide;
    }
};
triangle.setValues();
console.log(triangle.isEqualSides());
console.log(triangle.getPerimeter());


console.log('---2---')

let calculator = {
    sum() {
        return this.a + this.b;
    },
    multi() {
        return this.a * this.b;
    },
    diff() {
        return this.a - this.b;
    },
    div() {
        return this.a / this.b;
    },
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.diff());


console.log('---3---')
let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country,'','');
format.apply(country, ['[', ']']);

console.log('---4---')
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
}
logIt();


console.log('---lesson9---')
let counterFn = createCounter();
function createCounter() {
    let currentCount = 0
    return  () => currentCount++;
}
console.log('Count', counterFn());
console.log('Count', counterFn());
console.log('Count', counterFn());


let obj = {
    a: 'a',
    b: {
        c: 'c',
        d: 'd',
    },
}
let newObj2 = Object.assign({}, obj);
console.log(newObj2);



const obj2 = {
    x: 10
};

function someFunc() {
    return this.x + 10;
}
someFunc2 = someFunc.bind(obj2)
console.log(someFunc2());