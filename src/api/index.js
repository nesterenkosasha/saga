import ApiCreator from './api'

const api = ApiCreator('localhost:3000')

export const getUsers = (payload) => {
  if(payload){
    if(payload.select && payload.input){
      return api.get(`users/?${payload.select}=${payload.input}`)
    }
  }
  return api.get("users")
}

export const getUser = (id) => api.get(id)
export const uathServer = () => api.get("auth")

console.log("API", getUsers)
//
export const addUser = (user) => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})

export const deleteUserApi = (id) => api.delete(`users/${id}`)

export const updateUserApi = (user) => api.put(`users/${user.id}`, {
  body: JSON.stringify(user),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})