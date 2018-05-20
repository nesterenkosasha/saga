import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getUsers as getUsersAction, setUsers, addNewUser } from '../actions'
import { getUsers, addUsers } from '../api/index.js'

function * todoListSaga() {
  yield fork(getTodosWatcher)
  yield fork(addNewUserWatcher)

}

function * getTodosWatcher() {
  yield takeEvery(getUsersAction, getTodosWorker)
}

function * getTodosWorker() {
  yield put({ type: "spinerStart", payload: true})
  yield delay(2000)
  const users = yield call(getUsers)
  console.log("SAGAS", users)
  yield put({ type: "spinerStart", payload: false})
  yield put(setUsers(users))
}

export default function * rootSaga() {
  yield fork(todoListSaga)
}
//yield fork(todoAddSaga)
  //yield fork(todoSaga)

function * addNewUserWatcher() {
    yield takeEvery(addNewUser, addNewUserWorker)

}

function * addNewUserWorker() {
    yield call(addUsers, {
        
    })
    // yield put({ type: "spinerStart", payload: true})
    // yield delay(2000)
    // const users = yield call(getUsers)
    // console.log("SAGAS", users)
    // yield put({ type: "spinerStart", payload: false})
    // yield put(setUsers(users))
  }
  