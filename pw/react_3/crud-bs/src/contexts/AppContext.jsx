import { createContext, useEffect, useState } from 'react' 
import { getUserById, getUsers } from '@services'

// eslint-disable-next-line react-refresh/only-export-components
export const appContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [userList, setUserList] = useState([])

  const updateUserList = () => {
    getUsers().then(users => setUserList(users))
  }

  const updateCurrentUser = (id) => {
    getUserById(id).then(user => setCurrentUser(user))
  }

  useEffect(() => {
    const userId = localStorage.getItem('user-id')

    if (userId !== null) {
      updateCurrentUser(userId)
    }

    updateUserList()
  }, []);

  return (
    <appContext.Provider value={{ currentUser, userList, updateCurrentUser, updateUserList }}>
      {children}
    </appContext.Provider>
  )
}