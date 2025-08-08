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
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 4,
    borderRadius: 5
  },
  icon: {
    width: 36,
    height: 36,
  },
})