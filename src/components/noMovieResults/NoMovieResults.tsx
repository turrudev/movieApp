import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {TranslationsContext} from "../../providers/TranslationProvider";

const NoMovieResults: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false),
        styles = StyleSheet.create({
            container: {
                padding: 5,
                width: "max-content",
                maxWidth: "auto",
                height: "max-content",
                margin: "0 auto",
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.5s ease-in-out",
            },
            visible: {
                opacity: 1
            },
            message: {
                margin: 0
            }
        }),
        translations = useContext(TranslationsContext);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={css(styles.container, isVisible && styles.visible)}>
            <h4 className={css(styles.message)}>{translations.getMessage("noMoviesFound")}<span role="img" aria-label="sad face">&#128542;</span></h4>
        </div>
    );
};


export default NoMovieResults;
