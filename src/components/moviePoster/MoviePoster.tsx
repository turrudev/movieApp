import React from 'react';
import MovieFallbackImageSrc from "./movie_fallback.jpeg";
import {css, StyleSheet} from "aphrodite";

interface Props {
    movieTitle: string;
    moviePoster: string;
}

const MoviePoster = ({movieTitle, moviePoster}: Props) => {
    const styles = StyleSheet.create({
        container: {
            width: "auto",
            margin: "0 auto",
            maxHeight: 200
        }
    });

    return (
        <img src={moviePoster || MovieFallbackImageSrc} alt={movieTitle} className={css(styles.container)}/>
    );
};

export default MoviePoster;