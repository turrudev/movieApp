import React from 'react';
import MovieCollection from "../../../models/movieCollection/MovieCollection";
import MovieComponent from "../../movie/MovieComponent";
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";

interface Props {
    movies: MovieCollection
}

const Movies = ({movies}: Props) => {
    const styles = StyleSheet.create({
        container: {
            ...Grid.setRowCol(2, 1),
            gridGap: 62,
            padding: 23,
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            display: "grid"
        }
    });

    let totalIndex = 0;

    return (
        <div className={css(styles.container)}>
            {Object.entries(movies).map(([year, entries]) => (
                Object.values(entries).map(movie => {
                    return <MovieComponent movie={movie} key={movie.id} delay={(totalIndex++) * 100}/>;
                })
            ))}
        </div>
    );
};

export default Movies;
