import { Alert } from 'react-native'

export const searchAndSetLocation = async (address, mapRef, setMarker) => {
  const url =
    'https://maps.googleapis.com/maps/api/geocode/json' +
    `?address=${encodeURIComponent(address)}` +
    `&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
  try {
    const res = await fetch(url)
    const data = await res.json()

    if (data.status === 'OK' || data.results.length > 0) {
      const location = data.results[0].geometry.location

      setMarker({
        latitude: location.lat,
        longitude: location.lng,
        title: data.results[0].formatted_address,
        description: 'Resultado da pesquisa'
      })

      mapRef.current.animateToRegion({
        latitude: location.lat,
        longitude: location.lng,
        latitudeDelta: 0.0151, //tamanho legal do zoom para endereço específico, fica ruim para cidades/países ):
        longitudeDelta: 0.0069 //
      }, 1000)
    } else throw new Error(data.error_message || 'Nenhum resultado encontrado.')
  } catch (error) {
    Alert.alert('Erro', error.message)
  }
}