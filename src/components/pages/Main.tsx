import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../utils/Grid";
import {ThemeContext} from "../../providers/ThemeProvider";
import withDocumentTitle from "./withDocumentTitle";
import MovieSearch from "./main/MovieSearch";
import {TranslationsContext} from "../../providers/TranslationProvider";

const Main = () => {
    const {theme} = useContext(ThemeContext),
        styles = StyleSheet.create({
            main: {
                ...Grid.define("max-content auto", "auto"),
                backgroundColor: theme.app.background,
                color: theme.app.text,
                height: "100vh"
            },
            pageContent: Grid.setRowCol(2, 1),
        });

    // react-router-dom >= 6.0.0 does not allow HOC call inside the Route. It must be defined sadly outside.
    const MovieSearchWithDocumentTitle = withDocumentTitle(MovieSearch, useContext(TranslationsContext).getMessage('movieSearchPage'));

    return (
        <div className={css(styles.main)}>
            <div className={css(styles.pageContent)}>
                <Router>
                    <Routes>
                        <Route path="*" element={<MovieSearchWithDocumentTitle/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default Main;

