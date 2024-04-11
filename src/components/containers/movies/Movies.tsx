import React from 'react';
import MovieCollection from "../../../models/movieCollection/MovieCollection";
import MovieComponent from "../../movie/MovieComponent";
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";

const MovieSearch = () => {
    const styles = StyleSheet.create({
            container: {
                ...Grid.setRowCol(2, 1),
                gridGap: 62,
                padding: 23,
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                display: "grid"
            }
        }),
        movieCollection: MovieCollection = {
            '2010': {
                '1': {title: 'Inception', year: '2010', id: '1', posterURL: ''}
            },
            '2008': {
                '2': {title: 'The Dark Knight', year: '2008', id: '2', posterURL: ''}
            },
            '2014': {
                '3': {title: 'Interstellar', year: '2014', id: '3', posterURL: ''}
            },
            '1994': {
                '4': {title: 'The Shawshank Redemption', year: '1994', id: '4', posterURL: ''},
                '5': {title: 'Fight Club', year: '1994', id: '5', posterURL: ''},
                '6': {title: 'Pulp Fiction', year: '1994', id: '6', posterURL: ''},
                '8': {title: 'Forrest Gump', year: '1994', id: '8', posterURL: ''}
            },
            '1999': {
                '7': {title: 'The Matrix', year: '1999', id: '7', posterURL: ''}
            },
            '2001': {
                '9': {title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', id: '9', posterURL: ''}
            },
            '1972': {
                '10': {title: 'The Godfather', year: '1972', id: '10', posterURL: ''}
            }
        };

    return (
        <div className={css(styles.container)}>
            {Object.entries(movieCollection).map(([year, movies]) => (
                Object.values(movies).map(movie => (
                    <MovieComponent movie={movie} key={movie.id}/>
                ))
            ))}
        </div>
    );
};

export default MovieSearch;
