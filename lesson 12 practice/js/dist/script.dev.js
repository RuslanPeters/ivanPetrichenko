"use strict";

(function () {
  "use strict";

  var numberOfFilms = Number(prompt("How many movies have you seen?"));
  var questionsQuantity = numberOfFilms;
  var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };

  for (var i = 0; i < questionsQuantity; i++) {
    var oneOfLastWatchedMovies = prompt("What is you last watched movie?"),
        movieScore = prompt("How can you rate this movie?");
    personalMovieDB.movies[i] += "".concat(oneOfLastWatchedMovies, " / ").concat(movieScore, " , ");
    console.log(oneOfLastWatchedMovies + " " + movieScore);
  }

  console.log(personalMovieDB.movies);
})();