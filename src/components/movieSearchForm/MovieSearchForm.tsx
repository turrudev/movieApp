import React, {useContext, useState} from 'react';
import {css, StyleSheet} from 'aphrodite';
import Grid from "../../utils/Grid";
import MediaQuery from "../../utils/MediaQuery";
import {ThemeContext} from "../../providers/ThemeProvider";
import {TranslationsContext} from "../../providers/TranslationProvider";

interface Props {
    onSearch: (query: string) => void;
}

const SearchMoviesForm: React.FC<Props> = ({onSearch}) => {
    const [query, setQuery] = useState(''),
        {theme} = useContext(ThemeContext),
        translations = useContext(TranslationsContext),
        styles = StyleSheet.create({
            form: {
                ...Grid.define("max-content max-content", "auto"),
                ...Grid.setRowCol(1, 1),
                justifyContent: "center",
                gridRowGap: 10
            },
            labelContainer: Grid.setRowCol(1, 1),
            inputContainer: {
                ...Grid.setRowCol(2, 1),
                ...Grid.define("max-content", "auto max-content"),
                gridColumnGap: 5,
                ...MediaQuery.mobile({
                    ...Grid.define("max-content max-content", "1fr"),
                    gridRowGap: 5
                })
            },
            input: {
                ...Grid.setRowCol(1, 1),
                padding: 10,
                borderRadius: 4,
                fontSize: "0.6rem",
                minWidth: 300,
                border: `1px solid ${theme.searchForm.inputBorder}`,
                maxWidth: "80wh",
                outline: 'none'
            },
            button: {
                ...Grid.setRowCol(1, 2),
                borderRadius: 4,
                fontSize: "0.7rem",
                background: theme.searchForm.buttonBackground,
                color: theme.searchForm.buttonText,
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                ':hover': {
                    background: theme.searchForm.buttonBackgroundHover,
                },
                ...MediaQuery.mobile(Grid.setRowCol(2, 1))
            },
        });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (query.trim().length >= 3) {
            onSearch(query.trim());
            setQuery("");
        }
    };

    return (
        <form className={css(styles.form)} onSubmit={handleSubmit}>
            <div className={css(styles.labelContainer)}>
                <label htmlFor="searchInput">
                    {translations.getMessage("searchMoviesByTitle")}
                </label>
            </div>
            <div className={css(styles.inputContainer)}>
                <input
                    type="text"
                    id="searchInput"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={translations.getMessage("enterCharacters")}
                    className={css(styles.input)}
                    pattern="^\S.{2,}$"
                    title={translations.getMessage("enterCharactersWarning")}
                    aria-label={translations.getMessage("searchMoviesByTitle")}
                    required
                />
                <button type="submit" className={css(styles.button)} aria-label={translations.getMessage("submitSearch")}>
                    {translations.getMessage("search")}
                </button>
            </div>
        </form>
    );
};

export default SearchMoviesForm;
