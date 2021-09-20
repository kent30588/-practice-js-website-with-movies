/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
//'use strict';

//const movieDB = {
//    movies: [
//        "Скотт Пилигрим против...",
//        "Логан",
//        "Лига справедливости",
//        "Ла-ла лэнд",
//        "Одержимость"
//    ]
//};

//const delPicture = document.querySelectorAll('.promo__adv img'),
//    promoBg = document.querySelector('.promo__bg'),
//    genre = promoBg.querySelector('.promo__genre'),
//    movieFilms = document.querySelector('.promo__interactive-list');

////удаляем рекламные блоки
//delPicture.forEach(item => {
//    item.remove();
//});
////меняем жанр фильма
//genre.textContent = 'драмма';
////меняем фоновую картинку
//promoBg.style.backgroundImage = 'url(img/bg.jpg)';
////удаление тех фильмов которые в файле HTML
//movieFilms.innerHTML = '';
////сортируем список фильмов
//movieDB.movies.sort();
////добавляем фильмы из базы
//movieDB.movies.forEach((item, i) => {
//    movieFilms.innerHTML += `<li class="promo__interactive-item">${i + 1}
//	 ${item}<div class="delete"></div></li>`;
//});

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener('DOMContentLoaded', () => {
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
        movieFilms = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    //вешаю обработчик на отправку формы
    addForm.addEventListener('submit', (e) => {
        // отменяю стандартное поведение(отменяю перезагрузку страници после нажатия кнопки подтвердить)
        e.preventDefault();
        //обрезаем название фильма если символов больше 21
        if (addInput.value.length > 21) {
            movieDB.movies.push(addInput.value.slice(0, 21) + '...');
        } else {
            // добавляю название фильма которое ввел в поле ввода
            movieDB.movies.push(addInput.value);
        }
        // проверка на галочку
        if (checkbox.checked) {
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.sort();
        // запускаю функцию
        addFilm();
    });
    //функция которая передает фильмы в массив movieDB.movies
    movieDB.movies.sort();

    function addFilm() {
        // удаление тех фильмов которые в файле HTML
        movieFilms.innerHTML = '';
        // сортировка базы с фильмами (item - фильм, i - индекс в массиве) и создаем разметку подставляя фильмы в разметку
        movieDB.movies.forEach((item, i) => {
            movieFilms.innerHTML += `<li class="promo__interactive-item">${i + 1}
     												${item}<div class="delete"></div></li>`;
        });
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                //удаляю фильм
                item.parentNode.remove();
                //  удаляю его из массива
                movieDB.movies.splice(i, 1);
                //  запускаю функцию для того 
                //чтобы список фильмов после удаления обновился на странице
                addFilm();
            });
        });

    }

    //удаляем рекламные блоки
    delPicture.forEach(item => {
        item.remove();
    });
    //меняем жанр фильма
    genre.textContent = 'драмма';
    //меняем фоновую картинку
    promoBg.style.backgroundImage = 'url(img/bg.jpg)';


    addFilm();
});