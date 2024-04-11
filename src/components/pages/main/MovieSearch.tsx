import React from 'react';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";
import MovieSearchForm from "../../movieSearchForm/MovieSearchForm";
import Movies from "../../containers/movies/Movies";

const MovieSearch = () => {
    const styles = StyleSheet.create({
        container: {
            ...Grid.define("max-content max-content", "auto"),
            gridRowGap: 15,
            padding: 10
        }
    });

    const onSearch = (movieTitle: string): void => {
        //TODO
        console.log(movieTitle);
    };

    return (
        <div className={css(styles.container)}>
            <MovieSearchForm onSearch={onSearch}/>
            <Movies/>
        </div>
    );
};

export default MovieSearch;
