let name = prompt('What is your name?');
let count = 0;
while(count<4) {
    if(count===2)
        console.log("Happy birthday to you, dear " + name)
    else
        console.log("Happy birthday to you!")
    count++;
}
let num = prompt('What number of .# you want to see?')
for (let i = 0; i < num; i++) {
    console.log('.#')
}

let a = prompt('Enter a number')
while(!parseInt(a)){
    a = prompt('Invalid. You should enter a number')
}
let sum=0;
for(let i=0;i<parseInt(a);i++){
    if(i % 2!==0)
    sum=sum+i;
}
console.log("Sum of all odd to a = "+sum)


let i = 0;

while (true) {
    let r = Math.random();
    i++;
    if (r > 0.7) {
        console.log(`r: ${r}, iter: ${i}`);
        break;
    }
}

for(let i=1; i<=50; i++){
    if(i % 3==0 && i % 5 == 0)
        console.log("Div by 5 and 3")
    else if(i % 3==0)
        console.log("Div by 3")
    else if(i % 5==0)
        console.log("Div by 5")
    else
        console.log(i)

}


let today = new Date();
let UTCstring = today.toUTCString();
console.log(UTCstring);

