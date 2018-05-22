import { fork, takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { getUsers as getUsersAction, setUsers, addNewUser, addNewUserToreducer, getOneUser } from '../actions'
import { getUsers, addUser, getUser } from '../api/index.js'

function * getUsersWatcher() {
    yield takeLatest(getUsersAction, getUsersWorker)
}

function * getUsersWorker() {
    try{
        yield put({ type: "spinerStart", payload: true})
        const users = yield call(getUsers)
        yield put({ type: "spinerStart", payload: false})
        yield put(setUsers(users))
    } catch(error){
        console.log(error)
    }       
}

function * addNewUserWatcher() {
    yield takeEvery("addNewUser", addNewUserWorker)
}

function * addNewUserWorker({ payload: {firstName, lastName, age, visits, progress, status} }) {
    try{
        const user = yield call(addUser, {
            firstName,
            lastName,
            age,
            visits,
            progress,
            status
        })
        if(firstName && lastName && age && visits && progress && status){
            yield put(addNewUserToreducer(user))
        }
    } catch(err){
        console.log(err)
    }
}

function * getOneUserWatcher() {
    yield takeEvery("getOneUser", getOneUserWorker)
}

function * getOneUserWorker({ payload: id }) {
    try{
        yield call(getUser(id))        
    } catch(err){
        console.log(err)
    }
}

export default function * usersSaga() {
  yield fork(getUsersWatcher)
  yield fork(addNewUserWatcher)
  yield fork(getOneUserWatcher)
}