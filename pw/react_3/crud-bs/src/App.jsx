import { BrowserRouter } from 'react-router-dom'

import { AppContextProvider } from '@contexts'

import { Router } from './Router'

export const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  )
}