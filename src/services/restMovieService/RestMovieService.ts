import MovieService from "../MovieService";
import Movie from "../../models/movie/Movie";


export default class RestMovieService implements MovieService<Movie> {
    constructor(private readonly serverUrl: string) {
    }

    async searchMoviesByTitle(title: string): Promise<Movie[]> {
        const OMDB_API_KEY: string = process.env.REACT_APP_MOVIE_SERVICE_API_KEY || "",
            url = `${this.serverUrl}/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(title)}&type=movie`;

        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error(`Failed to fetch movies. Status: ${response.status}`);

            const data = await response.json();

            if (data.Response === 'True') {
                return data.Search.map((movie: any) => ({
                    title: movie.Title,
                    year: movie.Year,
                    id: movie.imdbID,
                    posterURL: movie.Poster
                }));
            } else {
                return [];
            }
        } catch (error: any) {
            throw new Error(`Error searching movies: ${error.message}`);
        }
    }

    static getName(): string {
        return "rest";
    }
}