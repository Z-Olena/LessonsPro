const object = {
    a: 5,
    b: { g: 8, y: 9, t: { q: 48 } },
    x: 47
   }
let newObj = JSON.parse(JSON.stringify(object));
object.a = 20;
   
console.log(object); 
console.log(newObj);