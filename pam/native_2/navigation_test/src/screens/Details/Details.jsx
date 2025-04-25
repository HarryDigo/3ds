import React from "react";
import { Button, Text, View } from 'react-native';

import styles from './Details.module.styles';

function Details(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}></Text>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    )
}