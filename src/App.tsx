import React from 'react';
import {ThemeProvider} from "./providers/ThemeProvider";
import {TranslationsProvider} from "./providers/TranslationProvider";
import Main from "./components/pages/Main";
import {Provider} from "react-redux";
import InitialState, {SettingsState} from "./state/reducers/initialState";
import store from "./state/store/store";

export interface AppProps {
    settings: SettingsState;
}

const App = ({settings = InitialState.settings}: AppProps) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <TranslationsProvider>
                    <ThemeProvider>
                        <Main settings={settings}/>
                    </ThemeProvider>
                </TranslationsProvider>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
