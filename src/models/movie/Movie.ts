export type MovieYear = string;
export type MovieId = string;

type Movie = {
    title: string;
    year: MovieYear;
    id: MovieId;
    posterURL: string;
};

export default Movie;