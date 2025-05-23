import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './Profile.module.styles';

export function Profile(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title='Go to Home'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title='Go to Details'
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title='Go Back'
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  )
};