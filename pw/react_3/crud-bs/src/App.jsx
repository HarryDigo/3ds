import { useEffect } from 'react'
import { AppContextProvider } from '@contexts'
import { useAppContext } from '@hooks'
import { getUserById } from '@services'

import { Button } from 'react-bootstrap'

export const App = () => {
  const { currentUser, userList, oi } = useAppContext();

  const test = () => {
    console.log(currentUser, userList)
  }

  return (
    <AppContextProvider>
      <Button onClick={oi}>
        oi
      </Button>
    </AppContextProvider>
  )
}