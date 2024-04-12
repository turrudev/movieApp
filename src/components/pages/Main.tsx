import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../utils/Grid";
import {ThemeContext} from "../../providers/ThemeProvider";
import withDocumentTitle from "./withDocumentTitle";
import MovieSearch from "./main/MovieSearch";
import {TranslationsContext} from "../../providers/TranslationProvider";
import MovieService from "../../services/MovieService";

interface Props<T> {
    service: MovieService<T>;
}

const Main: React.FC<Props<any>> = ({service}) => {
    const {theme} = useContext(ThemeContext),
        styles = StyleSheet.create({
            main: {
                ...Grid.define("max-content auto", "1fr"),
                backgroundColor: theme.app.background,
                color: theme.app.text,
                padding: 10,
                minHeight: "100vh"
            },
            title: {
                ...Grid.setRowCol(1, 1),
                display: "grid",
                textAlign: "center"
            },
            pageContent: Grid.setRowCol(2, 1),
        }),
        pageTitle: string = useContext(TranslationsContext).getMessage('movieSearchPage');

    // react-router-dom >= 6.0.0 does not allow HOC call inside the Route. It must be defined sadly outside.
    const MovieSearchWithDocumentTitle = withDocumentTitle(MovieSearch, pageTitle);

    return (
        <div className={css(styles.main)}>
            <h2 className={css(styles.title)}>{pageTitle}</h2>
            <div className={css(styles.pageContent)}>
                <Router>
                    <Routes>
                        <Route path="*" element={<MovieSearchWithDocumentTitle service={service}/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default Main;

