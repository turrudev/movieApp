import MovieCollection from "../../models/movieCollection/MovieCollection";
import AppActions from "../actions/app.actions";

const setMovies = (movies: MovieCollection, ttl: number) => ({type: AppActions.SET_MOVIES, movies});

const AppCreators = {
    setMovies
};

export default AppCreators;