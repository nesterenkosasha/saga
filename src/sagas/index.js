import { fork } from 'redux-saga/effects'
import userSaga from './user-edit'
import filterSaga from './filter'
import usersSaga from './user'
import authSaga from './auth'

export default function * rootSaga() {
  yield fork(usersSaga)
  yield fork(userSaga)
  yield fork(filterSaga)
  yield fork(authSaga)
}
