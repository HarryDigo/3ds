import { Image, StyleSheet, View } from "react-native";

export function Icon({ image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4
  },
  icon: {
    width: 24,
    height: 24,
  },
})