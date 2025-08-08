import { Dimensions, StyleSheet, View } from "react-native";
import { CustomButton, Icon } from "../components";

export function Home() {
  return (
    <View style={styles.topBar} />
  )
}

const styles = StyleSheet.create({
  topBar: {
    height: 20, 
    width: Dimensions.get('window').width, 
    backgroundColor: "#ccc"
  }
})