import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import withDocumentTitle from './withDocumentTitle';
import Home from "./main/Home";
import {TranslationsContext} from "../../providers/TranslationProvider";
import {css, StyleSheet} from "aphrodite";
import Grid from "../../utils/Grid";
import {ThemeContext} from "../../providers/ThemeProvider";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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
    const HomeWithDocumentTitle = withDocumentTitle(Home, useContext(TranslationsContext).getMessage('welcomePageTitle'));

    return (
        <div className={css(styles.main)}>
            <Header/>
            <div className={css(styles.pageContent)}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeWithDocumentTitle/>}/>
                        <Route path="*" element={<HomeWithDocumentTitle/>}/>
                    </Routes>
                </Router>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;

