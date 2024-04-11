import React, {useEffect, useState} from 'react';
import MovieCollection from "../../../models/movieCollection/MovieCollection";
import MovieComponent from "../../movie/MovieComponent";
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";

interface Props {
    movies: MovieCollection
}

const Movies = ({movies}: Props) => {
    const [renderedMovies, setRenderedMovies] = useState<React.ReactNode[]>([]);

    //TODO use a proper React Animations Library
    useEffect(() => {
        const renderMoviesWithDelay = () => {
            let delay = 0;

            const movieElements: React.ReactNode[] = [];

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [year, moviesInYear] of Object.entries(movies)) {
                for (const [id, movie] of Object.entries(moviesInYear)) {
                    setTimeout(() => {
                        movieElements.push(<MovieComponent movie={movie} key={id}/>);
                        setRenderedMovies([...movieElements]);
                    }, delay);

                    delay += 100;
                }
            }
        };

        renderMoviesWithDelay();
    }, [movies]);

    const styles = StyleSheet.create({
        container: {
            ...Grid.setRowCol(2, 1),
            gridGap: 62,
            padding: 23,
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            display: "grid"
        }
    });

    return (
        <div className={css(styles.container)}>
            {renderedMovies}
        </div>
    );
};

export default Movies;
