import React, {useContext, useEffect, useState} from 'react';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";
import MovieSearchForm from "../../movieSearchForm/MovieSearchForm";
import Movies from "../../containers/movies/Movies";
import Movie from "../../../models/movie/Movie";
import AppWorker from "../../../app.worker";
import WorkerMessages from "../../../config/workerMessages";
import MovieService from "../../../services/MovieService";
import Loader from "../../loader/Loader";
import MovieCollection from "../../../models/movieCollection/MovieCollection";
import GenericFailMessage from "../../genericFailMessage/GenericFailMessage";
import {TranslationsContext} from "../../../providers/TranslationProvider";

interface Props<T> {
    service: MovieService<T>;
}

const MovieSearch: React.FC<Props<Movie>> = ({service}) => {
    const [movies, setMovies] = useState<null | MovieCollection>(null),
        [requestOnGoing, setRequestOnGoing] = useState(false),
        [error, setError] = useState(""),
        [myWorkerInstance, setMyWorkerInstance] = useState<Worker | null>(null),
        translations = useContext(TranslationsContext),
        styles = StyleSheet.create({
            container: {
                ...Grid.define("max-content max-content", "auto"),
                gridRowGap: 15,
                padding: 10
            }
        });

    useEffect(() => {
        const worker = new AppWorker();

        setMyWorkerInstance(worker);

        return () => worker.terminate();
    }, []);

    useEffect(() => {
        setRequestOnGoing(false);
    }, [movies]);

    if (myWorkerInstance) {
        myWorkerInstance.onmessage = (event: any) => {
            const data = event.data;

            if (data.type === WorkerMessages.GROUPED_MOVIES) setMovies(data.payload);
        };
    }

    const onSearch = (title: string) => {
        if (requestOnGoing) return;

        setRequestOnGoing(true);
        setError("");

        service.searchMoviesByTitle(title).then((results) => {
            myWorkerInstance!.postMessage({type: WorkerMessages.GROUP_MOVIES_BY_YEAR, payload: {movies: results}});
        }).catch((error: any) => {
            setRequestOnGoing(false);
            setMovies(null);
            setError(error);
        });
    };

    return (
        <div className={css(styles.container)}>
            <MovieSearchForm onSearch={onSearch}/>
            {!requestOnGoing && <Movies movies={movies}/>}
            {requestOnGoing && <Loader/>}
            {!requestOnGoing && error && <GenericFailMessage message={`${translations.getMessage("errorMessage")} ${error}`}/>}
        </div>
    );
};

export default MovieSearch;
