import {useDispatch, useSelector} from "react-redux";
import {InitialStateProps} from "../../state/reducers/initialState";
import SettingsCreator from "../../state/creators/settings.creator";
import {css, StyleSheet} from "aphrodite";
import Grid from "../../utils/Grid";
import {useContext} from "react";
import {TranslationsContext} from "../../providers/TranslationProvider";

const Counter = () => {
    const {counter} = useSelector((state: InitialStateProps) => state.settings),
        dispatch = useDispatch(),
        translations = useContext(TranslationsContext),
        styles = StyleSheet.create({
            container: {
                ...Grid.define("max-content max-content", "max-content"),
                gridRowGap: 10,
                justifyContent: "center"
            },
            text: Grid.setRowCol(1, 1),
            button: Grid.setRowCol(2, 1),
        });

    const increaseCounter = (): void => {
        dispatch(SettingsCreator.increaseSettingsCounter());
    }

    return (
        <div className={css(styles.container)}>
            <h3 className={css(styles.text)}>
                {counter}
            </h3>
            <button onClick={increaseCounter}>
                {translations.getMessage('increaseCounter')}
            </button>
        </div>
    );
};

export default Counter;
