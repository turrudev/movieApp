import React from 'react';
import {ThemeProvider} from "./providers/ThemeProvider";
import {TranslationsProvider} from "./providers/TranslationProvider";
import Main from "./components/pages/Main";
import {Provider} from "react-redux";
import store from "./state/store/store";
import MovieService from "./services/MovieService";
import MovieFactory from "./services/movieServiceFactory/MovieServiceFactory";
import RestMovieService from "./services/restMovieService/RestMovieService";

interface Props<T> {
    service?: MovieService<T>;
}

const Endpoint: string = process.env.REACT_APP_MOVIE_SERVICE_ENDPOINT || "";

const App: React.FC<Props<any>> = ({service}) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <TranslationsProvider>
                    <ThemeProvider>
                        <Main service={service || MovieFactory.createMovieService(RestMovieService.getName(), Endpoint)}/>
                    </ThemeProvider>
                </TranslationsProvider>
            </Provider>
        </React.StrictMode>
    );
};

export default App;
