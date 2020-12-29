const quantityOfMovies = prompt("How many your favorite movies do you know?");

let favoriteMoviesList, movie, movieRate, watchedMovie;
let key, value;

movie += prompt("What is your favorit movie?") + " ";
    movieRate += prompt("How you rate it?") + " ";

for (let i = 0; i < quantityOfMovies; i++) {
    
    

}
favoriteMoviesList = {
    count: quantityOfMovies,
    movies: {
        movie: "Some movie",
        rate: 10
    },
    actors: {},
    genres: [],
    privat: false
};
favoriteMoviesList.movies[movie] = movie;
console.log(favoriteMoviesList);
    


