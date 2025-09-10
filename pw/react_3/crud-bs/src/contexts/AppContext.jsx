import { createContext, useEffect, useState } from 'react' 
import { getUsers } from '@services';

// eslint-disable-next-line react-refresh/only-export-components
export const appContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const logInUser = async (username, password) => {
    const users = await getUsers()
  }

  return (
    <appContext.Provider value={{ currentUser }}>
      {children}
    </appContext.Provider>
  )
}

export { AppContextProvider }