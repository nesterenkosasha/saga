import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const addNewUser = ({firstName, lastName, age}) => {
    return{
        type: "addNewUser",
        payload: { firstName, lastName, age }
    }
} 
export const addNewUserToreducer = createAction('addNewUserToreducer')

export const getOneUser = createAction('getOneUser')
export const popUpOpen = createAction('popUpOpen')
export const toDelete = (id) => {
    return{
        type: "toDelete",
        payload: id
    }
} 
export const deleteTodo = createAction('deleteTodo')
