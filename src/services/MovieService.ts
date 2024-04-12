export default interface MovieService<T> {
    searchMoviesByTitle(title: string): Promise<T[]>;
}
