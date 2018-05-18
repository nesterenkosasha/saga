import { createAction } from 'redux-actions'

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
//
// export const fetch_start = () => ({
//   type: 'FETCH_START'});
export const spinerStart = () => ({
  type: 'spinerStart',
  payload: true,
});
