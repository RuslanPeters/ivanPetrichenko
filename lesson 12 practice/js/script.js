(function() {
    "use strict";
    
    const numberOfFilms = Number(prompt("How many movies have you seen?"));
    let questionsQuantity = numberOfFilms;

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    for (let i = 0; i < questionsQuantity; i++) {

        const oneOfLastWatchedMovies = prompt("What is you last watched movie?"),
            movieScore = prompt("How can you rate this movie?");

        personalMovieDB.movies[i] += `${oneOfLastWatchedMovies} / ${movieScore} , `;
        console.log(oneOfLastWatchedMovies + " " + movieScore);
    }

    
    console.log(personalMovieDB.movies);

    
}());