import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native'; // Importe o componente Image corretamente
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import ImageLogo from '../components/ImageLogo';

import { getPerfil, insertPerfil, updatePerfil } from '../services/PerfilServices';
import { useIsFocused } from '@react-navigation/native';

const CadastroConta = (route) => {

  const { perfil } = route.params ? route.params : {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();


  const handleAcountPress = () => {
    navigation.navigate('Login'); // Navega para a tela de Login
  };

  const handleCancel = () => {
    setNome('');
    setEmail('');
    setPassword('');
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [perfis, setPerfis] = useState([]);
  useEffect(() => {

    getPerfil().then((dados) => {
      setPerfis(dados);
      //console.log(dados);
    });

  }, [isFocused]);

  useEffect(() => {
    if (perfil) {
      setNome(perfil.nome);
      setEmail(perfil.email);
      setPassword(perfil.password);
    }
  }, [perfil]);

  const handleCalcular = () => {
    // Find the profile with the entered email
    const foundProfile = perfis.find(profile => profile.email === email && profile.nome === nome && profile.password === password);

    // Verificar se os campos estão vazios
    if (!nome || !email || !password) {
      Alert.alert('Por favor, preencha todos os campos.');
      return; // Retorna se algum campo estiver vazio
    }

    // Validar o formato do email
    if (!validateEmail(email)) {
      Alert.alert('Email inválido. Por favor, insira um email válido.');
      return;
    }

    // Validar a senha
    if (!validatePassword(password)) {
      Alert.alert('Senha inválida. A senha deve conter no mínimo seis caracteres e pelo menos um caracter especial.');
      return;
    }

    if (foundProfile) {
      Alert.alert('Nome ou Email já cadastrados');
      return;
    }

    if (perfil) {
      updatePerfil({
        nome: nome,
        email: email,
        password: password,
        id: perfil.id
      }).then(() => {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        setTimeout(() => {
          navigation.navigate('Login');
        }, 1000);
      });
    } else {
      insertPerfil({
        nome: nome,
        email: email,
        password: password
      }).then(() => {
        Alert.alert('Sucesso', 'Conta criada com sucesso!');
        setTimeout(() => {
          navigation.navigate('Login');
        }, 1000);
      });
    }
  };

  // Função para validar o formato do email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Função para validar a senha
  const validatePassword = (password) => {
    // Verifica se a senha tem pelo menos seis caracteres e pelo menos um caracter especial
    return password.length >= 6 && /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);
  };

  return (
    <Container>
      <Header title={'Criar Conta'} />
      <Body>
        <ImageLogo></ImageLogo>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          left={<TextInput.Icon name="account" />}
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
          <Button
            style={styles.buttonC}
            mode="contained"
            onPress={handleCancel}>
            Cancelar
          </Button>
          <Button
            style={styles.buttonR}
            mode="contained"
            onPress={handleCalcular}>
            Cadastrar
          </Button>
        </View>
        <View style={styles.legenda}>
          <Text style={{ marginLeft: 10 }}>Possui conta?</Text>
          <Button style={{ marginLeft: 15 }} onPress={handleAcountPress}>
            Fazer login
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

export default CadastroConta;
