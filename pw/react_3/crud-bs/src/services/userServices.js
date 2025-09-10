import { api } from '@services'

export const getUserById = async (id) => {
  try {
    const res = await api.get(`/users/${id}`)
    return res.data
  } catch (err) {
    console.error('Error fetching user by ID:', err)
  }
}

export const getUsers = async () => {
  try {
    const res = await api.get('/users')
    return res.data
  } catch (err) {
    console.error('Error fetching users:', err)
  }
}