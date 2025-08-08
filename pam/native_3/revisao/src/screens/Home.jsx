import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { CustomButton, Icon } from "../components";

import { google, dog_image } from "../assets";

export function Home() {
  return (
    <>
      <View style={styles.topBar} />
      <View style={styles.container}>
        <Image source={dog_image}/>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {fontSize: 48, fontWeight: 500}]}>
            Ótimo dia!
          </Text>
          <Text style={[styles.text, {fontSize: 16}]}>
            Como deseja acessar?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Como deseja acessar?"
            color="#33c37d"
            onPress={() => console.log("login 1")}
            theme="light"
            children={
              <Icon image={google} />
            }
          />
          <CustomButton
            title="Como deseja acessar?"
            color="#ccc"
            onPress={() => console.log("login 2")}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 50,
    gap: 10,
  },
  buttonContainer: {
    gap: 10
  },
  text: {
    color: '#555',
  },
  topBar: {
    height: 60, 
    width: Dimensions.get('window').width, 
    backgroundColor: "#ccc",
  },
})