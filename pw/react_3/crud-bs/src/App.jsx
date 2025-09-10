import { useEffect } from 'react'
import { AppContextProvider } from '@contexts'

function App() {
  useEffect(() => {
    test()
  })

  const test = async () => {
    console.log(localStorage.getItem('user'))
  }

  return (
    <AppContextProvider>
      {test}
    </AppContextProvider>
  )
}

export default App
