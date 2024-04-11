import MoviePoster from "../moviePoster/MoviePoster";
import React, {useContext} from "react";
import Movie from "../../models/movie/Movie";
import {css, StyleSheet} from "aphrodite";
import {ThemeContext} from "../../providers/ThemeProvider";
import {TranslationsContext} from "../../providers/TranslationProvider";

const IMDB_URL: string = "https://www.imdb.com/title";

interface Props {
    movie: Movie
}

const MovieComponent = ({movie}: Props) => {
    const {theme} = useContext(ThemeContext),
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
                transition: "background-color 0.3s, color 0.3s",
                cursor: "pointer",
                ":hover": {
                    backgroundColor: theme.movie.backgroundHover,
                },
            },
            title: {
                margin: 0,
            },
            year: {
                margin: "5px 0"
            },
            hiddenLabel: {
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden"
            }
        }),
        translations = useContext(TranslationsContext);

    const openInIMDB = (): void => {
        window.open(`${IMDB_URL}/${movie.id}`, "_blank");
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter" || event.key === " ") openInIMDB();
    };

    return (
        <div className={css(styles.container)} onClick={openInIMDB} onKeyDown={handleKeyPress} tabIndex={0} role="button">
            <h4 className={css(styles.title)}>{movie.title}</h4>
            <MoviePoster movieTitle={movie.title} moviePoster={movie.posterURL}/>
            <h5 className={css(styles.year)}>{movie.year}</h5>
            <span className={css(styles.hiddenLabel)}>{translations.getMessage("openInIMDB")}</span>
        </div>
    );
};

export default MovieComponent;