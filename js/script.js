"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оценишь его?', '');

        if (a != null && b != null && a.length > 0 && a.length < 51 && b.length > 0) {
            personalMovieDB.movies[a] = b;
            console.log('success!');
        } else {
            console.log('oh no..');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Error');
    }
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Твой любимый жанр, бро, под номером ${i}`);
    }
}

writeYourGenres();
showMyDB();