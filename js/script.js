"use strict";

const numberOfFilms = +prompt('Сколько фильмов ты уже посмотрел?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оценишь его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оценишь его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);