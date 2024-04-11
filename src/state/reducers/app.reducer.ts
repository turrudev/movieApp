import InitialState, {AppState} from "./initialState";
import AppActions from "../actions/app.actions";

export interface AppActionType {
    type: keyof typeof AppActions
}

const appReducer = (state: AppState = InitialState, action: AppActionType): AppState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default appReducer;
