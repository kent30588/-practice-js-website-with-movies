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

const delPicture = document.querySelectorAll('.promo__adv img'),
    promoBg = document.querySelector('.promo__bg'),
    genre = promoBg.querySelector('.promo__genre'),
    movieFilms = document.querySelector('.promo__interactive-list');

//удаляем рекламные блоки
delPicture.forEach(item => {
    item.remove();
});
//меняем жанр фильма
genre.textContent = 'драмма';
//меняем фоновую картинку
promoBg.style.backgroundImage = 'url(img/bg.jpg)';
//удаление тех фильмов которые в файле HTML
movieFilms.innerHTML = '';
//сортируем список фильмов
movieDB.movies.sort();
//добавляем фильмы из базы
movieDB.movies.forEach((item, i) => {
    movieFilms.innerHTML += `<li class="promo__interactive-item">${i + 1}
	 ${item}<div class="delete"></div></li>`
});