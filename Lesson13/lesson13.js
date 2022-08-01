class Animal {
  constructor(options) {
    this.run = options.run
    this.stop = options.stop
    this.color = options.color
  }

  sounds() {
    console.log('I am Animal!')
  }

}

class Cat extends Animal {
  constructor(options) {
    super(options)
  }
  sounds() {
    console.log('Mew')
  }
}

const cat = new Cat({
  run: 'is runing',
  stop: 'stops',
  color: 'black'
})
cat.sounds();
console.log(cat);

class Dog extends Animal {
  constructor(options) {
    super(options)
  }
  sounds() {
    console.log('Bark')
  }
}

const dog = new Dog({
  run: 'is runing',
  stop: 'stops',
  color: 'gray'
})
dog.sounds();
console.log(dog);

// function Student1 (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Student1.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// var john = new Student1("John", "Carter");
// console.log(john);
// console.log(john.getFullName());

class Student {
  constructor(param) {
    this.firstName = param.firstName
    this.lastName = param.lastName
    this.averageScore = param.averageScore
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
  isGrantHolder() {
    if(this.averageScore >= 4) {
      return true
    } else return false
  }
}
const student = new Student({
  firstName: 'John',
  lastName: 'Carter',
  averageScore: 3.9

})
console.log(student);
console.log(student.getFullName());
console.log(student.isGrantHolder());

class Aspirant extends Student {
  constructor(param) {
    super(param)
    this.dissertationTopic = param.dissertationTopic
    this.isDissertationComplete = param.isDissertationComplete
  }
  isGrantHolder() {
    if(this.averageScore >= 4.5 && this.isDissertationComplete){
    return true
  } else return false
  }
  
}
const aspirant = new Aspirant({
  firstName: 'Ivan',
  lastName: 'Petrov',
  averageScore: 4.8,
  dissertationTopic: 'Ecology',
  isDissertationComplete: false
})
console.log(aspirant);
console.log(aspirant.getFullName());
console.log(aspirant.isGrantHolder());
let arr = Object.getOwnPropertyNames(aspirant);
arr.push(Object.getOwnPropertyNames(Object.getPrototypeOf(student))[1]);
arr.push(Object.getOwnPropertyNames(Object.getPrototypeOf(aspirant))[1]);
for (var each in arr){
  console.log(arr[each]);
}


class Plane {
  constructor(name, isFlying=false) {
    this.name = name
    this.isFlying = isFlying
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}
let plane1 = new Plane ("First");
console.log(plane1);
plane1.takeOff();
console.log(plane1);
let plane2 = new Plane("Killer", true);
console.log(plane2);
plane2.land();
console.log(plane2);
let airport={
  planes:[],
  
  getFlyingPlanes(){
    return this.planes.filter(plane => plane.isFlying).length
  }
};
airport.planes.push(plane1,plane2);
console.log(airport.getFlyingPlanes());

