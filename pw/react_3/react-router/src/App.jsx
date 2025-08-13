import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { CounterContextProvider } from './contexts'

function App() {

  return (
    <BrowserRouter>
      <CounterContextProvider>
        <Router />
      </CounterContextProvider>
    </BrowserRouter>
  )
}

export { App }
