/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость"
    ]
};

const delAvd = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    genre = promoBg.querySelector('.promo__genre'),
    movieFilm = document.querySelector('.promo__interactive-list');

//Удалить все рекламные блоки со страницы (правая часть сайта)
delAvd.forEach(item => {
    item.remove();
});
//Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'драма';
//Изменить задний фон постера с фильмом
promoBg.style.backgroundImage = 'url(img/bg.jpg)';
//Очистить список
movieFilm.innerHTML = '';
//Сортировка
movieDB.movies.sort();
//Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту
movieDB.movies.forEach((item, i) => {
    movieFilm.innerHTML += `<li class="promo__interactive-item">
                            ${i + 1} ${item}
                            <div class="delete"></div></li>`;
});