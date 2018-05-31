import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { deleteUserApi, updateUserApi } from '../api'
import { deleteUser, updateUserInReducer } from '../actions'

function * userDeleteWatcher() {
    yield takeEvery("toDelete", userDeleteWorker)
}

function * userDeleteWorker({ payload: id }) {
    try{
        yield call(deleteUserApi, id)
        yield put(deleteUser(id))
    } catch(error){
        console.error(error.message)
    }
}

function * updateUserWatcher() {
    yield takeEvery("updateUser", updateUserWorker)
}

function * updateUserWorker({ payload }) {
    try{
        const user = yield call(updateUserApi, payload)
        yield put({
            type: "updateUserInReducer",
            payload: user
        })
    } catch(error){
        console.error(error)
    }
}
    
export default function * userSaga() {
    yield fork(userDeleteWatcher)
    yield fork(updateUserWatcher)
}