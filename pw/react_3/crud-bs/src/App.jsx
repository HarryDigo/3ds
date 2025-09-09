import { useEffect } from 'react'
import { api } from '@services'

function App() {
  useEffect(() => {
    test()
  })

  const test = async () => {
    const res = await api.get('/accounts')
    console.log(res.data)
  }

  return (
    <>
      {test}
    </>
  )
}

export default App
