import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { FilterInput } from './FilterInput';

export const MainMap = () => {
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});