import { createContext, useEffect, useState } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const counterContext = createContext({});

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState((JSON.parse(localStorage.getItem('count')) || 0))

  const increment = () => {
    const newCount = count + 1
    setCount(newCount)
  }

  const reset = () => {
    setCount(0)
  }

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  return (
    <counterContext.Provider value={{ count, increment, reset }}>
      {children}
    </counterContext.Provider>
  )
}