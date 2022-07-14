(function() {
    const element = document.getElementsByTagName("p");
    style = element[2].style;
    style.color = "red";

    const mainBlok = document.querySelector("#main");
    const footerBlok = document.querySelector("#footer");
    mainBlok.append(footer);
})();

const lights = document.querySelectorAll(".circle");
console.log(lights);
let activeLight = 0;

setInterval(() => {
    changeLight();
}, 2000);

function changeLight() {
    lights[activeLight].className = 'circle';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = lights[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}

const table = document.querySelector("#table");
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

fillTable(table, arr);

function fillTable(table, arr) {
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < arr[i].length; j++) {
            let td = document.createElement("td");
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


