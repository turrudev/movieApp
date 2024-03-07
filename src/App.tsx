import React from 'react';
import {ThemeProvider} from "./providers/ThemeProvider";
import {TranslationsProvider} from "./providers/TranslationProvider";
import Main from "./components/pages/Main";

const App = () => {
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
