import { Image, StyleSheet, View } from "react-native";

export function Icon({ image, size }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: size, height: size}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 4,
    borderRadius: 5
  },
})