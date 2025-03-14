import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>first app :3</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#e0e0e0',
    fontSize: 24
  }
});
