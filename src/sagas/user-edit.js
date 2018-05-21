import { fork, takeEvery, call, put, takeLatest } from 'redux-saga/effects'
import { deleteUser } from '../api/index.js'
import { toDelete, deleteTodo } from '../actions/index.js'


export default function * userSaga() {
    yield fork(userDeleteWatcher)
    // yield fork(todoToggleWatcher)
}

function * userDeleteWatcher() {
    yield takeEvery("toDelete", userDeleteWorker)
}

function * userDeleteWorker({ payload: id }) {
    try{
        yield call(deleteUser, id)
        yield put(deleteTodo(id))
    } catch(error){
        console.error(error.message)
    }
}

// function * todoToggleWatcher() {
//     yield takeEvery(handleToggle, todoToggleWorker)
// }

// function * todoToggleWorker({ payload: id }) {
//     let todo = yield select(selectTodoById, id) 
//     todo = toggleStatus(todo)
//     todo = yield call(updateTodoApi, todo)
//     yield put(updateTodo(todo))
// }

// const toggleStatus = (todo) => ({
//     ...todo,
//     status: todo.status === 'active' ? 'complete' : 'active'
// })



















// export function * updateUsersWatcher() {
//     yield takeEvery("update", updateUserWorker)
//   }
    
//   function * updateUserWorker({ payload: id }) {
//     try{
//       console.log("todelete", id)
//         const user = yield call(getUser(id))
//         console.log("111", user)
       
//     } catch(err){
//       console.log(err)
//     }
//   }
  