import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { getUsers } from '../api'
import { filter, setUsers } from '../actions'


export default function * filterSaga() {
    yield fork(filterWatcher)
}

function * filterWatcher() {
    yield takeEvery("filter", filterWorker)
}

function * filterWorker({payload}) {
    try{
        const filteredUser = yield call(getUsers, payload)
        yield put(setUsers(filteredUser))
    } catch(error){
        console.error(error.message)
    }
}
