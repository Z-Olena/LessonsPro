let elem = document.getElementById("text");
elem.addEventListener("input", function(event) {
  if(parseInt(event.target.value)) {
    console.log('Only text')
  } else {
  
  }
  console.log(event.target.value);
});
document.forms[0].addEventListener("submit", 
function (e) {
  e.preventDefault();
  console.log(this.text.value);
});

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
console.log(validateEmail('anystring@anystring.anystring'));
document.forms[0].addEventListener("submit", 
function (e) {
  e.preventDefault();
  console.log(this.email.value);
});
function phonenumber(tel) 
    {
        var re = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        return re.test(tel);
    }
    
console.log(phonenumber('+0-9'));
document.forms[0].addEventListener("submit", 
function (e) {
  e.preventDefault();
  console.log(this.tel.value);
});



let ul = document.getElementById("ul");

ul.addEventListener("click", function (event) {
  console.log(event);
  event.target.style.color = event.target.innerHTML;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = event.target.innerHTML;
  ctx.fillRect(0, 0, 150, 150);

});


window.addEventListener('click', (event) => {
  console.log(event);

const canvas = document.getElementById("canvas2");
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'green';

if (event) {
  ctx.beginPath();       
  ctx.moveTo(50, 50);    
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke(); 

  x = event.offsetX;
  y = event.offsetY;
  event = 0;  
} else {
  x = event.offsetX;
  y = event.offsetY;
  event = 1;
}  
});


const strings = [
	'https://proglib.io/',
	'this is not a URL',
	'https://google.com/',
	'123461',
	'https://proglib.io/?s=google',
	'http://not a valid url',
	'abc http://invalid.url/'
];

let regex = /^https?:\/\/[\w\/?.&-=]+$/;

let urls = [];

for( let i = 0; i < strings.length; i++ ){

	if( regex.test(strings[i]) ){
		
		// Валидная ссылка
		urls.push(strings[i]);

	}

}

console.log('Valid URLs: ', urls);



