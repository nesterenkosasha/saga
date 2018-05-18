import { fork, takeEvery, call, put } from 'redux-saga/effects'

import { getUsers as getUsersAction, setUsers } from '../actions'
import { getUsers } from '../api'

function * todoListSaga() {
  yield fork(getTodosWatcher)
}

function * getTodosWatcher() {
  yield takeEvery(getUsersAction, getTodosWorker)
}

function * getTodosWorker() {
//  yield put(spinerStart())spinerStart
  const users = yield call(getUsers)
  yield put(setUsers(users))
}

export default function * rootSaga() {
  yield fork(todoListSaga)
}
//yield fork(todoAddSaga)
  //yield fork(todoSaga)
