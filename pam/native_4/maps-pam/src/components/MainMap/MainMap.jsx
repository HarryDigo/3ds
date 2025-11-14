import { Dimensions, StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { FilterInput } from './FilterInput'

export const MainMap = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          coordinate={{latitude: -23.55052, longitude: -46.633308}}
          title={"São Paulo"}
          description={"Capital financeira do Brasil"}
        />
      </MapView>
      <FilterInput />
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})