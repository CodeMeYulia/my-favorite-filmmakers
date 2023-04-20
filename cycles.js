let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}

let i = 0;
let index = filmmakers[i];
// index = 0;

while (i < 9) {
    let num = +i + 1;
    i++;
}

nameMaker.innerHTML = `<div class="main__f-maker_name">${num}. ${filmmakers[0].name}</div>`;