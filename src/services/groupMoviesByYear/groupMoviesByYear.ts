import MovieCollection from "../../models/movieCollection/MovieCollection";
import Movie from "../../models/movie/Movie";

const groupMoviesByYear = (movies: Movie[]): MovieCollection => {
    const groupedMovies: MovieCollection = {};

    movies.forEach(movie => {
        const {year, id} = movie;

        if (!groupedMovies[year]) groupedMovies[year] = {};

        groupedMovies[year] = {...groupedMovies[year], [id]: movie};
    });

    return groupedMovies;
};

export default groupMoviesByYear;
