import SettingsActions from "../actions/settings.actions";
import {call, select, takeEvery} from 'redux-saga/effects';
import Storage from "../../utils/Storage";
import {InitialStateProps} from "../reducers/initialState";

function* saveState() {
    const state: InitialStateProps = yield select();
    yield call(Storage.saveSettings, state.settings);
}

export function* settingsSaga() {
    yield takeEvery([SettingsActions.INCREASE_COUNTER], saveState);
}
