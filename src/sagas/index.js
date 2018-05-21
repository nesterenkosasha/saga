import { fork, takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { getUsers as getUsersAction, setUsers, addNewUser, addNewUserToreducer, getOneUser } from '../actions'
import { getUsers, addUser, getUser } from '../api/index.js'
import userSaga from './user-edit.js'

function * todoListSaga() {
  yield fork(getTodosWatcher)
  yield fork(addNewUserWatcher)
  yield fork(getOneUserWatcher)
}

function * getTodosWatcher() {
  yield takeLatest(getUsersAction, getTodosWorker)
}

function * getTodosWorker() {
  yield put({ type: "spinerStart", payload: true})
 // yield delay(2000)
  const users = yield call(getUsers)
 // console.log("SAGAS", users)
  yield put({ type: "spinerStart", payload: false})
  yield put(setUsers(users))
}

export default function * rootSaga() {
  yield fork(todoListSaga)
  yield fork(userSaga)
}
//yield fork(todoAddSaga)
  //yield fork(todoSaga)

function * addNewUserWatcher() {
  yield takeEvery("addNewUser", addNewUserWorker)
}

function * addNewUserWorker({ payload: {firstName, lastName, age} }) {
  try{
      const user = yield call(addUser, {
          firstName,
          lastName,
          age,
          "visits": 75,
          "progress": 85,
          "status": "relationship"
      })
     // console.log("111", user)
      if(firstName && lastName && age){
              yield put(addNewUserToreducer(user))
      }
  } catch(err){
    console.log(err)
  }
  
    // yield put({ type: "spinerStart", payload: true})
    // yield delay(2000)
    // const users = yield call(getUsers)
    // console.log("SAGAS", users)
    // yield put({ type: "spinerStart", payload: false})
    // yield put(setUsers(users))
  }

  function * getOneUserWatcher() {
    yield takeEvery("getOneUser", getOneUserWorker)
  }
  
  function * getOneUserWorker({ payload: id }) {
    try{
     // console.log(id)
        const user = yield call(getUser(id))
        console.log("111", user)
       
    } catch(err){
      console.log(err)
    }
  }
  