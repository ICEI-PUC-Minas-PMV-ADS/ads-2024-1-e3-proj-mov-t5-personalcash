import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import ImageLogo from '../components/ImageLogo';

import { usePerfil } from '../contexts/PerfilContext';
import { useUser } from '../contexts/UserContext';
import { getPerfil } from '../services/PerfilServices';
import { useIsFocused } from '@react-navigation/native';


const Login = ({ navigation }) => {
  
  const isFocused = useIsFocused();

  const { setFoundProfile } = usePerfil();
  const { setSigned } = useUser();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [perfis, setPerfis] = useState([]);
  useEffect(() => {

    getPerfil().then((dados) => {
        setPerfis(dados);
        //console.log(dados);
      });

  },[isFocused]);

  const handleCancel = () =>{
    setNome('');
    setEmail('');
    setPassword('');
  };

  const handleLoginPress = () => {
    navigation.navigate('Cadastrar');
  };

  const handleGoMenu = async () => {
  if (!nome || !email || !password) {
    Alert.alert('Por favor, preencha todos os campos.');
    return;
  }

  // Find the profile with the entered email
  const foundProfile = perfis.find(profile => profile.email === email && profile.nome === nome && profile.password === password);

  if (foundProfile) {
    // Check if the entered password matches the profile's password
    if (foundProfile) {
      console.log(foundProfile);  // Aqui verifico qual usuário que está logando
      setSigned(true);
      setFoundProfile(foundProfile);
      navigation.navigate('Home');
    } else {
      setSigned(false);
      Alert.alert('Nome, Email ou Senha inválidos');
    }
  } else {
    setSigned(false);
    Alert.alert('Não foi possível encontrar a conta com o nome, email e senha fornecidos');
  }
};

  return (
    <Container>
      <Header title={'Login'} />
      <Body>
        <ImageLogo />
        <Input 
          label="Nome" 
          value = {nome}
          onChangeText={(text) => setNome(text)}
          left={<TextInput.Icon name="account"/>}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonC} mode="contained" onPress={handleCancel}>
            Cancelar
          </Button>
          <Button style={styles.buttonR} mode="contained" onPress={handleGoMenu}>
            Logar
          </Button>
        </View>
        <View style={styles.legenda}>
          <Text style={{ marginLeft: 10 }}>Ainda não tem conta?</Text>
          <Button style={{ marginLeft: 15 }} onPress={handleLoginPress}>
            Cadastrar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  legenda: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    flex: 1,
    marginLeft: 15,
  },
  buttonC: {
    backgroundColor: 'red',
    marginTop: 5,
    flex: 1,
    marginRight: 15,
  },
});

export default Login;
