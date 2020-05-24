'use strict';

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

function showMyDB () {
    if (personalMovieDB.privet === false)
        console.log(personalMovieDB);
}

function writeYourGenres() {
    for (let i = 1; i<4; i++) {
        personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
    }
    console.log(personalMovieDB.genres);
}




function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

function rememberMyFilms() {
    for (let i = 0; i<2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?');
        let b = prompt('На сколько оцените его?');

        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            alert('не прокатит');
            i--
        }

    }
}

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('мало фильмов');
    } else if (numberOfFilms >=10 && numberOfFilms <= 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        alert('Вы киноман')
    } else {
        alert('error');
    }
}

start();

rememberMyFilms();

detectPersonalLevel();

showMyDB();

writeYourGenres();
