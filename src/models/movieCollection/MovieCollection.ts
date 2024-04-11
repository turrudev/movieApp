import Movie, {MovieId, MovieYear} from "../movie/Movie";

type MovieCollection = Record<MovieYear, Record<MovieId, Movie>>;

export default MovieCollection;