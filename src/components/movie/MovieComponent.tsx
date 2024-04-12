import React, {useContext, useState} from 'react';
import MoviePoster from "../moviePoster/MoviePoster";
import Movie from "../../models/movie/Movie";
import {css, StyleSheet} from "aphrodite";
import {ThemeContext} from "../../providers/ThemeProvider";
import {TranslationsContext} from "../../providers/TranslationProvider";
import getMovieImdbLink from "../../utils/getIMDBMovieLink";

interface Props {
    movie: Movie;
    delay: number;
}

const MovieComponent = ({movie, delay}: Props) => {
    const {theme} = useContext(ThemeContext),
        translations = useContext(TranslationsContext),
        [isVisible, setIsVisible] = useState(false),
        styles = StyleSheet.create({
            container: {
                backgroundColor: theme.movie.background,
                color: theme.movie.text,
                padding: 20,
                borderRadius: 8,
                gridRowGap: 10,
                display: "grid",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                ":hover": {
                    backgroundColor: theme.movie.backgroundHover,
                },
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.5s ease"
            },
            title: {
                margin: 0,
            },
            year: {
                margin: "5px 0"
            }
        });

    //TODO investigate why Aphrodite/React is ignoring the opacity change from the keyframe animation to avoid using this.
    setTimeout(() => {
        setIsVisible(true);
    }, delay);

    const openInIMDB = (): void => {
        window.open(getMovieImdbLink(movie.id), "_blank");
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") openInIMDB();
    };

    return (
        <div className={css(styles.container)} onClick={openInIMDB} onKeyDown={handleKeyPress} tabIndex={0} role="button">
            <h4 className={css(styles.title)}>{movie.title}</h4>
            <MoviePoster movieTitle={movie.title} moviePoster={movie.posterURL}/>
            <h5 className={css(styles.year)}>{movie.year}</h5>
            <span>{translations.getMessage("openInIMDB")}</span>
        </div>
    );
};

export default MovieComponent;