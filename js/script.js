"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов ты уже посмотрел?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов ты уже посмотрел?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель!');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Error');
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } 
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            do {
                personalMovieDB.genres[i - 1] = prompt(`Твой любимый жанр, бро, под номером ${i}`);
            } while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null);
        }

        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Любимый жанр #${i+1} - это ${genre}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
// personalMovieDB.start();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
