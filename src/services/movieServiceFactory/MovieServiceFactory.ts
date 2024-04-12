import Movie from "../../models/movie/Movie";
import MovieService from "../MovieService";
import RestMovieService from "../restMovieService/RestMovieService";

export default class MovieFactory {
    static createMovieService(serviceType: string, serverUrl: string): MovieService<Movie> {
        switch (serviceType) {
            case RestMovieService.getName():
                return new RestMovieService(serverUrl);
            default:
                throw new Error('Invalid movie search service type.');
        }
    }
}
