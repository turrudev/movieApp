import {takeEvery} from 'redux-saga/effects';

function* saveState() {
}

export function* appSaga() {
    yield takeEvery("*", saveState);
}
