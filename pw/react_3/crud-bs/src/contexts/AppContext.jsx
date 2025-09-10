import { createContext, useEffect, useState } from 'react' 
import { getUserById, getUsers } from '@services';

// eslint-disable-next-line react-refresh/only-export-components
export const appContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userList, setUserList] = useState();

  useEffect(() => {
    getUserById(0).then(user => setCurrentUser(user));
    getUsers().then(users => setUserList(users));
  }, []);

  const oi = () => {
    console.log('oi')
  };

  return (
    <appContext.Provider value={{ currentUser, userList, oi }}>
      {children}
    </appContext.Provider>
  )
}

export { AppContextProvider }