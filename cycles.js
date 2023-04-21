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


const lastEl = filmmakers[filmmakers.length - 1].top_rated_film;
console.log(lastEl);

if (indexName === filmmakers.length) {
    console.log('go');
    topR = topR + `<p class="topFilms">${filmmakers[indexName].top_rated_film}</p>`;
  } else {
  topR = topR + `<p class="topFilms">${filmmakers[indexName].top_rated_film}, </p>`;
  };
  topfilms.innerHTML = topR;
  console.log(filmmakers.length);