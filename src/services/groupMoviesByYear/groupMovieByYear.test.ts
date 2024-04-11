import groupMoviesByYear from './groupMoviesByYear';
import MovieCollection from '../../models/movieCollection/MovieCollection';
import Movie from "../../models/movie/Movie";

describe('groupMoviesByYear', () => {
    const movie1: Movie = {title: 'Movie 1', year: '2021', id: '1', posterURL: '...'};
    const movie2: Movie = {title: 'Movie 2', year: '2021', id: '2', posterURL: '...'};
    const movie3: Movie = {title: 'Movie 3', year: '2022', id: '3', posterURL: '...'};
    const movie4: Movie = {title: 'Movie 4', year: '2023', id: '4', posterURL: '...'};

    const testCases: { name: string, input: Movie[], expectedOutput: MovieCollection }[] = [
        {
            name: 'Empty input array',
            input: [],
            expectedOutput: {}
        },
        {
            name: 'Group movies by year',
            input: [movie1, movie2, movie3, movie4],
            expectedOutput: {
                '2021': {
                    '1': movie1,
                    '2': movie2
                },
                '2022': {
                    '3': movie3
                },
                '2023': {
                    '4': movie4
                }
            }
        },
        {
            name: 'Overwrite movie with same id if year is the same',
            input: [movie1, {...movie2, id: '1'}],
            expectedOutput: {
                '2021': {
                    '1': {...movie2, id: '1'},
                }
            }
        },
        {
            name: 'Handle single movie in each year',
            input: [
                movie1,
                {...movie2, year: '2022', id: '4'},
                {...movie3, year: '2023', id: '5'}
            ],
            expectedOutput: {
                '2021': {
                    '1': movie1,
                },
                '2022': {
                    '4': {...movie2, year: '2022', id: '4'},
                },
                '2023': {
                    '5': {...movie3, year: '2023', id: '5'},
                }
            }
        },
        {
            name: 'Handle multiple movies with the same year',
            input: [
                {...movie1, id: '1'},
                {...movie1, id: '2'},
                {...movie1, id: '3'},
            ],
            expectedOutput: {
                '2021': {
                    '1': {...movie1, id: '1'},
                    '2': {...movie1, id: '2'},
                    '3': {...movie1, id: '3'},
                }
            }
        },
        {
            name: 'Handle movies with different ids but same title and year',
            input: [
                movie1,
                {...movie1, id: '2'},
            ],
            expectedOutput: {
                '2021': {
                    '1': movie1,
                    '2': {...movie1, id: '2'}
                }
            }
        },
        {
            name: 'Handle same movie repeated with different ids',
            input: [
                movie1,
                {...movie1, id: '2'},
                {...movie1, id: '3'},
            ],
            expectedOutput: {
                '2021': {
                    '1': movie1,
                    '2': {...movie1, id: '2'},
                    '3': {...movie1, id: '3'},
                }
            }
        },
        {
            name: 'Handle same movie repeated with different years',
            input: [
                movie1,
                {...movie1, year: '2022', id: '2'},
                {...movie1, year: '2023', id: '3'},
            ],
            expectedOutput: {
                '2021': {
                    '1': movie1,
                },
                '2022': {
                    '2': {...movie1, year: '2022', id: '2'},
                },
                '2023': {
                    '3': {...movie1, year: '2023', id: '3'},
                }
            }
        },
        {
            name: 'Handle movies with different titles but same year',
            input: [
                movie1,
                {...movie1, title: 'Movie 2', id: '2'},
            ],
            expectedOutput: {
                '2021': {
                    '1': movie1,
                    '2': {...movie1, title: 'Movie 2', id: '2'}
                }
            }
        }
    ];

    testCases.forEach(({name, input, expectedOutput}) => {
        test(`${name}`, () => {
            expect(groupMoviesByYear(input)).toEqual(expectedOutput);
        });
    });
});
