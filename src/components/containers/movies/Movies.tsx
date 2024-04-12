import React from 'react';
import MovieCollection from "../../../models/movieCollection/MovieCollection";
import MovieComponent from "../../movie/MovieComponent";
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";
import NoMovieResults from "../../noMovieResults/NoMovieResults";

interface Props {
    movies: MovieCollection | null;
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
        }),
        amountOfMovies: number = movies !== null ? Object.keys(movies!).length : -1;

    let totalIndex = 0;

    return (
        <React.Fragment>
            {(amountOfMovies > 0) &&
                <div className={css(styles.container)}>
                    {Object.entries(movies!).map(([year, entries]) => (
                        Object.values(entries).map(movie => {
                            return <MovieComponent movie={movie} key={movie.id} delay={(totalIndex++) * 100}/>;
                        })
                    ))}
                </div>
            }
            {(amountOfMovies === 0) && <NoMovieResults/>}
        </React.Fragment>
    );
};

export default Movies;
