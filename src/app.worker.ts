import groupMoviesByYear from "./services/groupMoviesByYear/groupMoviesByYear";
import WorkerMessages from "./config/workerMessages";
import Logger from "./utils/Logger";

/* eslint-disable no-restricted-globals */
self.onmessage = function (event) {
    const data = event.data;

    switch (data.type) {
        case WorkerMessages.GROUP_MOVIES_BY_YEAR:
            const {movies} = data.payload;
            self.postMessage({type: WorkerMessages.GROUPED_MOVIES, payload: groupMoviesByYear(movies)});
            break;
        default:
            Logger.warn('Unknown message type:', data.type);
            break;
    }
};

export default Worker as typeof Worker & { new(): Worker };
