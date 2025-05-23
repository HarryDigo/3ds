import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import styles from './Login.module.styles';

export function Login(props) {
  const { navigation } = props;
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    if (name === 'admin' && password === '123456') {
      navigation.navigate('Home');
    } else {
      alert('Usuário ou senha inválidos \n (usuario: admin, senha: 123456)');
      setName('');  
      setPassword('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput  //usuário padrão é admin
          placeholder='Insira o seu nome'
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput //senha padrão é 123456
          placeholder='Insira a sua senha'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <Button
          title='Entrar'
          onPress={validate}
        />
      </View>
    </View>
  )
};