import React, {useContext} from 'react';
import {css, StyleSheet} from "aphrodite";
import {ThemeContext} from "../../providers/ThemeProvider";
import Grid from "../../utils/Grid";

const Header = () => {
    const {theme} = useContext(ThemeContext),
        styles = StyleSheet.create({
            headerWrapper: {
                ...Grid.setRowCol(1, 1),
                backgroundColor: theme.header.background,
                color: theme.header.text,
                fontSize: 14
            }
        });

    return (
        <div className={css(styles.headerWrapper)}>
            Header
        </div>
    );
};

export default Header;

