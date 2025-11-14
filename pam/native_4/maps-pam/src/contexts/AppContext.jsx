import { createContext, useRef, useState } from 'react'

export const appContext = createContext()

export const AppContextProvider = ({ children }) => {
  const mapRef = useRef(null)

  const [marker, setMarker] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    title: "São Paulo",
    description: "Capital financeira do Brasil"
  })

  return (
    <appContext.Provider value={{ mapRef, marker, setMarker }}>
      {children}
    </appContext.Provider>
  )
}