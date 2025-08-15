import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { CustomButton, Icon } from "../components";

import { google, dog_image } from "../assets";

export function Login() {
  const time = new Date().getHours();

  return (
    <>
      <View style={styles.topBar} />
      <View style={styles.container}>
        <Image source={dog_image}/>
        <View style={styles.textContainer}>
          <Text style={[styles.text, {fontSize: 48, fontWeight: 500}]}>
            {time < 6 ? "Ótima noite!" : time < 12 ? "Ótimo dia!" : time < 18 ? "Ótima tarde!" : "Ótima noite!"}
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
            size={400}
          > 
            <Icon image={google} size={36} /> 
          </CustomButton>
          <CustomButton
            title="Outras opções"
            color="#ccc"
            onPress={() => console.log("login 2")}
            size={400}
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