const getMovieImdbLink = (movieId: string): string => {
    return `https://www.imdb.com/title/${movieId}`
};

export default getMovieImdbLink;