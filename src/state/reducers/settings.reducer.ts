import InitialState, {SettingsState} from "./initialState";
import SettingsActions from "../actions/settings.actions";

export interface SettingsActionType {
    type: keyof typeof SettingsActions;
    settings: any;
}

const settingsReducer = (state: SettingsState = InitialState.settings, action: SettingsActionType): SettingsState => {
    switch (action.type) {
        case SettingsActions.RESTORE_SETTINGS:
            return {
                ...state,
                ...action.settings,
            };
        case SettingsActions.INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        default:
            return state;
    }
};

export default settingsReducer;
