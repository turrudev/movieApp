import {combineReducers} from 'redux';
import SettingsReducer from "./settings.reducer";

const rootReducer = combineReducers({
    settings: SettingsReducer,
});

export default rootReducer;
