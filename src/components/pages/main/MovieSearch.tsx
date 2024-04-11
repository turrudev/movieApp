import React, {useEffect, useState} from 'react';
import {css, StyleSheet} from "aphrodite";
import Grid from "../../../utils/Grid";
import MovieSearchForm from "../../movieSearchForm/MovieSearchForm";
import Movies from "../../containers/movies/Movies";
import Movie from "../../../models/movie/Movie";
import AppWorker from "../../../app.worker";
import WorkerMessages from "../../../config/workerMessages";

const dummyMovies: Movie[] = [
    {title: 'Inception', year: '2010', id: '1', posterURL: ''},
    {title: 'The Dark Knight', year: '2008', id: '2', posterURL: ''},
    {title: 'Interstellar', year: '2014', id: '3', posterURL: ''},
    {title: 'The Shawshank Redemption', year: '1994', id: '4', posterURL: ''},
    {title: 'Fight Club', year: '1994', id: '5', posterURL: ''},
    {title: 'Pulp Fiction', year: '1994', id: '6', posterURL: ''},
    {title: 'The Matrix', year: '1999', id: '7', posterURL: ''},
    {title: 'Forrest Gump', year: '1994', id: '8', posterURL: ''},
    {title: 'The Lord of the Rings: The Fellowship of the Ring', year: '2001', id: '9', posterURL: ''},
    {title: 'The Godfather', year: '1972', id: '10', posterURL: ''},
];

const MovieSearch = () => {
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

        return () => {
            worker.terminate();
        };
    }, []);

    if (myWorkerInstance) {
        myWorkerInstance.onmessage = (event: any) => {
            const data = event.data;

            if (data.type === WorkerMessages.GROUPED_MOVIES) setMovies(data.payload);
        };
    }

    const onSearch = () => {
        myWorkerInstance!.postMessage({type: WorkerMessages.GROUP_MOVIES_BY_YEAR, payload: {movies: dummyMovies}});
    };

    return (
        <div className={css(styles.container)}>
            <MovieSearchForm onSearch={onSearch}/>
            <Movies movies={movies}/>
        </div>
    );
};

export default MovieSearch;
