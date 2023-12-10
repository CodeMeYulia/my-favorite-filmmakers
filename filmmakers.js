'use strict'

//определяем переменные
const fm = document.querySelector('.fm');
const topFilmsList = document.querySelector('.filmlist');
const bestfilms = [];
const filmmakers = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://www.film.ru/person/stiven-spilberg#filmography',
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

//данные из массива по режиссерам раскидываем в блоки по каждому режиссеру циклом
for (let i = 0; i < filmmakers.length; i++){
    const fMaker = document.createElement('div');
    fMaker.classList.add('fMaker');
    fMaker.innerHTML = `
    <hr class = "line">
    <div class="nameFm">${filmmakers[i].name}</div>
    <div class = "about">
        <div class = "role">${filmmakers[i].career}</div>
        <div class="films">
        <a href="${filmmakers[i].films}">фильмография</a>
        </div>
    </div>
    `
    fm.append(fMaker);
    // собираем отдельный блок с лучшими фильмами с пом нового массива
    bestfilms.push(`"${filmmakers[i].top_rated_film}"`);
    topFilmsList.innerHTML = bestfilms.join(', ');

}  


