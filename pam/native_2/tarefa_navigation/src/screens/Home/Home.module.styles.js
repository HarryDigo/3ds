import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212529',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  buttonContainer: {
    backgroundColor: '#eee',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  }
});