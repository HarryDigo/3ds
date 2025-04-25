import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './Home.module.styles';

export function Home(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <View style={styles.buttonContainer}>
        <Button 
          title='Go to Details'
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title='Go to Profile'
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  )
};