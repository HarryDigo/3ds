import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";

export function CustomButton({ title, color, theme, onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ([pressed && styles.pressed, styles.button, { backgroundColor: color }])}
    >
      <View style={{ marginRight: 'auto' }}>
        {children}
      </View>
      <View>
        <Text style={{ color: theme == 'light' ? 'white' : 'gray-700' }}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * .8,
    height: 80,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
  }
})