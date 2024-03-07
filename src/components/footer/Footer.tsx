import React, {useContext} from 'react';
import {css, StyleSheet} from "aphrodite";
import {ThemeContext} from "../../providers/ThemeProvider";
import Grid from "../../utils/Grid";

const Footer = () => {
    const {theme} = useContext(ThemeContext),
        styles = StyleSheet.create({
            footerWrapper: {
                ...Grid.setRowCol(3, 1),
                backgroundColor: theme.footer.background,
                color: theme.footer.text,
                fontSize: 12,
                bottom: 0,
                width: "100%",
                position: "fixed",
            }
        });

    return (
        <div className={css(styles.footerWrapper)}>
            Footer!
        </div>
    );
};

export default Footer;

