"use strict";

const numberOfFilms = prompt('Сколько фильмов ты уже посмотрел?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }


console.log(numberOfFilms);