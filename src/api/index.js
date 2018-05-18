import ApiCreator from './api'

const api = ApiCreator('localhost:3000')

export const getUsers = () => api.get('users')
//
// export const postTodo = (todo) => api.post('todos', {
//   body: JSON.stringify(todo),
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
// })
//
// export const deleteTodo = (id) => api.delete(`todos/${id}`)
//
// export const updateTodo = (todo) => api.put(`todos/${todo.id}`, {
//   body: JSON.stringify(todo),
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
// })
