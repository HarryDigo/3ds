import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { useAppContext } from '@hooks'

import { FilterInput } from './FilterInput'

export const MainMap = () => {
  const { mapRef, marker } = useAppContext()

  return (
    <View className='flex-1'>
      <FilterInput />
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          title={marker.title}
          description={marker.description}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0
  },
})