import { useContext } from 'react'
import { appContext } from '@contexts'

export const UseAppContext = () => {
  const context = useContext(appContext)

  return context
}