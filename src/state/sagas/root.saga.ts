import {all} from 'redux-saga/effects';
import {settingsSaga} from "./settings.saga";

export function* rootSaga() {
    yield all([
        settingsSaga()
    ]);
}