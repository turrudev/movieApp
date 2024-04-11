import React from 'react';
import MovieFallbackImageSrc from "./movie_fallback.jpeg";
import {css, StyleSheet} from "aphrodite";

interface Props {
    movieTitle: string;
}

const MovieFallbackImage = ({movieTitle}: Props) => {
    const styles = StyleSheet.create({
        container: {
            width: "auto",
            maxHeight: 200
        }
    });

    return (
        <img src={MovieFallbackImageSrc} alt={movieTitle} className={css(styles.container)}/>
    );
};

export default MovieFallbackImage;