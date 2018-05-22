import { fork, takeEvery, call, put, takeLatest, select } from 'redux-saga/effects'
import { deleteUser } from '../api/index.js'
import { toDelete, deleteTodo, updateUser } from '../actions/index.js'
import { createSelector } from 'reselect'

export default function * userSaga() {
    yield fork(userDeleteWatcher)
    yield fork(updateUserWatcher)
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

function * updateUserWatcher() {
    yield takeEvery("updateUser", updateUserWorker)
}

 //const selectState = (state, id) => state.find(el => el.id === id);
// console.log(selectState)

// const selectThing = () => createSelector(
//   selectState(),
//   (substate) => substate.get('thing')
// );

function * updateUserWorker({ payload }) {
   // let user = select(state, st => st.find(el => el.id === payload.id)) 
    console.log("payload", user)
    //     todo = toggleStatus(todo)
    //     todo = yield call(updateTodoApi, todo)
    //     yield put(updateTodo(todo))
}
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
  