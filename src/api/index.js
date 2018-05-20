import ApiCreator from './api'

const api = ApiCreator('localhost:3000')

export const getUsers = () => api.get('users')

//export const addUsers = () => api.post('users')()


console.log("API", getUsers)
//
export const addUsers = (user) => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})
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