import { useContext } from 'react'
import { appContext } from '@contexts'

export const useAppContext = () => {
  const context = useContext(appContext)

  return context
}