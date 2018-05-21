import ApiCreator from './api'

const api = ApiCreator('localhost:3000')

export const getUsers = () => api.get('users')

//export const addUsers = () => api.post('users')()
export const getUser = (id) => api.get(id)

console.log("API", getUsers)
//
export const addUser = (user) => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})

export const deleteUser = (id) => api.delete(`users/${id}`)

// export const updateTodo = (todo) => api.put(`todos/${todo.id}`, {
//   body: JSON.stringify(todo),
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
// })