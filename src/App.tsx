import React, {useEffect} from 'react';
import {ThemeProvider} from "./providers/ThemeProvider";
import {TranslationsProvider} from "./providers/TranslationProvider";
import Main from "./components/pages/Main";
import {useDispatch} from "react-redux";
import SettingsCreator from "./state/creators/settings.creator";
import {SettingsState} from "./state/reducers/initialState";

interface AppProps {
    settings: SettingsState;
}

const App = ({settings}: AppProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadLocalSettings = (): void => {
            dispatch(SettingsCreator.restoreSettings(settings));
        };

        loadLocalSettings();
    }, [settings, dispatch]);

    return (
        <React.StrictMode>
            <TranslationsProvider>
                <ThemeProvider>
                    <Main/>
                </ThemeProvider>
            </TranslationsProvider>
        </React.StrictMode>
    );
};

export default App;
