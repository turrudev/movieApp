import React from 'react';
import MovieCollection from "../../../models/movieCollection/MovieCollection";
import MovieFallbackImage from "../../movieFallbackImage/MovieFallbackImage";

const MovieSearch = () => {
    const movieCollection: MovieCollection = {
        '2010': {
            '1': {title: 'Inception', year: '2010', id: '1', posterURL: 'https://www.example.com/posters/inception.jpg'}
        },
        '2008': {
            '2': {title: 'The Dark Knight', year: '2008', id: '2', posterURL: 'https://www.example.com/posters/dark_knight.jpg'}
        },
        '2014': {
            '3': {title: 'Interstellar', year: '2014', id: '3', posterURL: 'https://www.example.com/posters/interstellar.jpg'}
        },
        '1994': {
            '4': {title: 'The Shawshank Redemption', year: '1994', id: '4', posterURL: 'https://www.example.com/posters/shawshank_redemption.jpg'},
            '5': {title: 'Fight Club', year: '1999', id: '5', posterURL: 'https://www.example.com/posters/fight_club.jpg'},
            '6': {title: 'Pulp Fiction', year: '1994', id: '6', posterURL: 'https://www.example.com/posters/pulp_fiction.jpg'},
            '8': {title: 'Forrest Gump', year: '1994', id: '8', posterURL: 'https://www.example.com/posters/forrest_gump.jpg'}
        },
        '1999': {
            '7': {title: 'The Matrix', year: '1999', id: '7', posterURL: 'https://www.example.com/posters/matrix.jpg'}
        },
        '2001': {
            '9': {title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', id: '9', posterURL: 'https://www.example.com/posters/lotr_fellowship.jpg'}
        },
        '1972': {
            '10': {title: 'The Godfather', year: '1972', id: '10', posterURL: 'https://www.example.com/posters/godfather.jpg'}
        }
    };

    return (
        <div>
            <h2>Movie Search</h2>
            <div>
                {Object.entries(movieCollection).map(([year, movies]) => (
                    <div key={year}>
                        <h3>{year}</h3>
                        <div>
                            {Object.values(movies).map(movie => (
                                <div key={movie.id}>
                                    <MovieFallbackImage movieTitle={movie.title}/>
                                    <p>{movie.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;
