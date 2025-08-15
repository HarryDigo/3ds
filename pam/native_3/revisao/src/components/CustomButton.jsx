import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

export function CustomButton({ title, color, size, theme, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ([pressed && styles.pressed, styles.button, { backgroundColor: color, width: size }])}
    >
      {children}
      <View style={[{ width: size }, styles.textView]}>
        <Text style={{ color: theme == 'light' ? 'white' : 'gray-700', fontSize: 16 }}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 70,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  textView: {
    position: 'absolute',
    alignItems: 'center',
  }
})