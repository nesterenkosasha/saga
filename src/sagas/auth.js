import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { uathServer } from '../api'
import { auth, authFail, authSuccess } from '../actions'


export default function * authSaga() {
    yield fork(authWatcher)
}

function * authWatcher() {
    yield takeEvery("auth", authWorker)
}

function * authWorker({payload}) {
    try{
        const userFromServer = yield call(uathServer)
        if(userFromServer.login === payload.login && (userFromServer.password.toString()) === payload.password){
            yield put(authSuccess())
        } else {
            yield put(authFail())
        }
    } catch(error){
        console.error(error.message)
    }
}