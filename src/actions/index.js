import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const addNewUser = createAction('addNewUser')
// ({
//     type: "addNewUser",
//     payload: { firstName, lastName, age }
// })