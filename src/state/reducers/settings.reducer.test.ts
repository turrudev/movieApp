import settingsReducer, {SettingsActionType} from "./settings.reducer";
import SettingsActions from "../actions/settings.actions";


const tests = {
    restoreSettings: {
        description: 'should handle RESTORE_SETTINGS action',
        initialState: {counter: 0},
        action: {type: SettingsActions.RESTORE_SETTINGS, settings: {counter: 5}} as SettingsActionType,
        expectedState: {counter: 5}
    },
    increaseCounter: {
        description: 'should handle INCREASE_COUNTER action',
        initialState: {counter: 0},
        action: {type: SettingsActions.INCREASE_COUNTER} as SettingsActionType,
        expectedState: {counter: 1}
    }
};

describe('Settings Reducer', () => {
    Object.entries(tests).forEach(([name, {description, initialState, action, expectedState}]) => {
        it(description, () => {
            expect(settingsReducer(initialState, action)).toEqual(expectedState);
        });
    });
});
