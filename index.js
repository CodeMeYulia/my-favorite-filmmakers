const fmakeritem = document.querySelector('.main__f-maker_text');
const nameMaker = document.querySelector('.main__f-maker_name');
const aboutMaker = document.querySelector('.main__f-maker_about');
const filmsMaker = document.querySelector('.main__f-maker_films');
const topfilms = document.querySelector('.topFilms');
let item = '';
let topR = '';

const filmmakers = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
];

let indexName = filmmakers.findIndex (el => el.name); //получаем индекс элемента

while (indexName < 7) {
  let numfm = `${indexName + 1}`; //получаем порядковый номер
  console.log(numfm, indexName);
  item = item + 
  `<div class="main__f-maker_item">
                <hr class="main__f-maker_item_borderline">
                <div class="main__f-maker_text">
                <div class="main__f-maker_name">${numfm}. ${filmmakers[indexName].name}</div>
                    <div class="main__f-maker_aboutblock">
                    <p class="main__f-maker_about">${filmmakers[indexName].career}</p>
                    <p class="main__f-maker_films"><a href="${filmmakers[indexName].films}" target="_blank">фильмография</a></p>
                    </div>
                </div>
            </div>`;
fmakeritem.innerHTML = item;
console.log(filmmakers.length);

if (indexName === filmmakers.length - 1) {
  topR = topR + `<p class="topFilms">${filmmakers[indexName].top_rated_film}</p>`;
} else {
  topR = topR + `<p class="topFilms">${filmmakers[indexName].top_rated_film}, </p>`;
};

topfilms.innerHTML = topR;
indexName++;
};




let num = 8;
while (num) {
    console.log(num);
    num--;
}