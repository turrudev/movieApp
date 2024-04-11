import InitialState, {AppState} from "./initialState";
import AppActions from "../actions/app.actions";
import MovieCollection from "../../models/movieCollection/MovieCollection";

export interface AppActionType {
    type: keyof typeof AppActions;
    movies: MovieCollection
}

const appReducer = (state: AppState = InitialState, action: AppActionType): AppState => {
    switch (action.type) {
        case AppActions.SET_MOVIES:
            return {
                ...state,
                ...action.movies
            }
        default:
            return state;
    }
};

export default appReducer;
