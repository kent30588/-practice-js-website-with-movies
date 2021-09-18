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

const adv = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    genre = promoBg.querySelector('.promo__genre'),
    filmList = document.querySelector('.promo__interactive-list');

//Удаляем рекламу
adv.forEach(item => {
    item.remove();
});
//меняем жанр
genre.textContent = 'драма';
// меняем фон
promoBg.style.backgroundImage = 'url(img/bg.jpg)';
//очищаем список фильмов
filmList.innerHTML = '';
//сортируем список фильмов
movieDB.movies.sort();
//Добавляем фильмы из базы
movieDB.movies.forEach((item, i) => {
    filmList.innerHTML += `<li class="promo__interactive-item">
                            ${i + 1} ${item}
                            <div class="delete"></div>
                        </li>`;
});