

const start = new Date();
console.log(start.getTime());

for (let i = 0; i < 100000; i++) {
  Math.floor();
}
const end = new Date();
console.log(end.getTime());

console.log((end.getTime() - start.getTime()) + ' seconds have passed');


const twoMinutes = 2;
const getTime2 = new Date();
const endTime = getTime2.setMinutes(getTime2.getMinutes() + 2);

let countTime = setInterval(function() {
  let now = new Date().getTime();
  let partTime = endTime - now;

  let minuts = Math.floor((partTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((partTime % (1000 * 60)) / 1000);

  minuts = minuts < 10 ? "0" + minuts : minuts;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("count-timer").innerHTML = minuts + ":" + seconds;

  if (partTime < 0) {
    clearInterval(countTime);
    console.log('Timer End')
  }
}, 1000);