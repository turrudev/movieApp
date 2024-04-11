import React from 'react';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";
import MovieSearchForm from "../../movieSearchForm/MovieSearchForm";

const MovieSearch = () => {
    const styles = StyleSheet.create({
        container: {
            ...Grid.define("max-content max-content", "max-content"),
            gridRowGap: 15,
            padding: 10,
            justifyContent: "center"
        }
    });

    const onSearch = (movieTitle: string): void => {
        //TODO
        console.log(movieTitle);
    };

    return (
        <div className={css(styles.container)}>
            <MovieSearchForm onSearch={onSearch}/>
        </div>
    );
};

export default MovieSearch;
