import { api } from '@services'

export const getUsers = async () => {
  try {
    const res = await api.get('/users')
    return res.data
  } catch (err) {
    console.error('Error fetching users:', err)
  }
}

export const getUserById = async (id) => {
  try {
    const res = await api.get(`/users/${id}`)
    return res.data
  } catch (err) {
    console.error('Error fetching user by ID:', err)
  }
}

export const getUserPurchases = async (id) => {
  try {
    const res = await api.get(`/users/${id}/purchases`)
    return res.data
  } catch (err) {
    console.error('Error fetching user purchases:', err)
  }
}

export const createUser = async (user) => {
  try {
    const res = await api.post('/users', user)
    return res.data
  } catch (err) {
    console.error('Error creating user:', err)
  }
}