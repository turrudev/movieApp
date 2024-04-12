import RestMovieService from './RestMovieService';

global.fetch = jest.fn();

const originalEnv = process.env,
    mockedApiKey: string = "000000";

process.env = {
    ...originalEnv,
    REACT_APP_MOVIE_SERVICE_API_KEY: mockedApiKey
};

describe('RestMovieService', () => {
    const mockServerUrl = 'http://example.com', movieService = new RestMovieService(mockServerUrl);

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should search movies by title successfully', async () => {
        const mockTitle = 'Inception',
            mockResponse = {
                Response: 'True',
                Search: [
                    {Title: 'Inception', Year: '2010', imdbID: 'tt1375666', Poster: 'http://example.com/poster.jpg'},
                ]
            };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        expect(await movieService.searchMoviesByTitle(mockTitle)).toEqual([
            {
                title: 'Inception',
                year: '2010',
                id: 'tt1375666',
                posterURL: 'http://example.com/poster.jpg',
            }
        ]);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${mockServerUrl}/?apikey=${mockedApiKey}&s=Inception&type=movie`);
    });

    it('should handle error when searching movies', async () => {
        const mockTitle = 'Inception',
            errorMessage = 'Failed to fetch movies. Status: 404';

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            status: 404,
        });

        await expect(movieService.searchMoviesByTitle(mockTitle)).rejects.toThrowError(errorMessage);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${mockServerUrl}/?apikey=${mockedApiKey}&s=Inception&type=movie`);
    });

    it('should return empty array if no movies are found', async () => {
        const mockTitle = 'NonExistentMovie',
            mockResponse = {
                Response: 'False',
                Error: 'Movie not found!',
            };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        expect(await movieService.searchMoviesByTitle(mockTitle)).toEqual([]);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(`${mockServerUrl}/?apikey=${mockedApiKey}&s=NonExistentMovie&type=movie`);
    });
});

afterAll(() => {
    process.env = originalEnv;
});
