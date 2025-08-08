import { Pressable, StyleSheet, Text, View } from "react-native";

export function CustomButton({ title, color, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, ({ pressed }) => (styles.pressed)]}
    >
      <View style={{ marginLeft: auto }}>
        {children}
      </View>
      <Text style={{ color: 'white' }}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: color,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
})