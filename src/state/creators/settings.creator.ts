import {SettingsState} from "../reducers/initialState";
import SettingsActions from "../actions/settings.actions";

const restoreSettings = (settings: SettingsState) => ({type: SettingsActions.RESTORE_SETTINGS, settings}),
    increaseSettingsCounter = () => ({type: SettingsActions.INCREASE_COUNTER});

const SettingsCreator = {
    restoreSettings,
    increaseSettingsCounter
};

export default SettingsCreator;