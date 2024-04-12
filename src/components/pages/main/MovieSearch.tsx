import React, {useEffect, useState} from 'react';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";
import MovieSearchForm from "../../movieSearchForm/MovieSearchForm";
import Movies from "../../containers/movies/Movies";
import Movie from "../../../models/movie/Movie";
import AppWorker from "../../../app.worker";
import WorkerMessages from "../../../config/workerMessages";
import MovieService from "../../../services/MovieService";

interface Props<T> {
    service: MovieService<T>;
}

const MovieSearch: React.FC<Props<Movie>> = ({service}) => {
    const [movies, setMovies] = useState({}),
        [myWorkerInstance, setMyWorkerInstance] = useState<Worker | null>(null),
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

    if (myWorkerInstance) {
        myWorkerInstance.onmessage = (event: any) => {
            const data = event.data;

            if (data.type === WorkerMessages.GROUPED_MOVIES) setMovies(data.payload);
        };
    }

    const onSearch = (title: string) => {
        service.searchMoviesByTitle(title).then((results) => {
            myWorkerInstance!.postMessage({type: WorkerMessages.GROUP_MOVIES_BY_YEAR, payload: {movies: results}});
        }).catch((error: any) => {
            //TODO
            console.log(error);
        });
    };

    return (
        <div className={css(styles.container)}>
            <MovieSearchForm onSearch={onSearch}/>
            <Movies movies={movies}/>
        </div>
    );
};

export default MovieSearch;
