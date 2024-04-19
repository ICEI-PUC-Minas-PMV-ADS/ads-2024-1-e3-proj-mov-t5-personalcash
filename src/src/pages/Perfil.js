import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário

import { usePerfil } from '../contexts/PerfilContext';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { insertPerfil, updatePerfil } from '../services/PerfilServices';

const Perfil = () => {
  const { foundProfile } = usePerfil();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (foundProfile) {
      setNome(foundProfile.nome);
      setEmail(foundProfile.email);
      setPassword(foundProfile.password);
    }
  }, [foundProfile]);

  const handleCalcular = () => {

    // Validar os inputs (se estão vazios ou não)
    if (!nome || !email || !password) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
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
      updatePerfil({
        nome: nome,
        email: email,
        password: password,
        id: foundProfile.id,
      })
        .then(() => {
          Alert.alert('Conta editada com sucesso');
        })
        .catch((error) => {
          console.error('Erro ao editar conta:', error);
        });
    } else {
      insertPerfil({
        nome: nome,
        email: email,
        password: password,
      })
        .then(() => {
          Alert.alert('Conta editada');
        })
        .catch((error) => {
          console.error('Erro ao criar conta:', error);
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
      <Header title={'Perfil'} />
      <Body>
        <View style={styles.iconContainer}>
          <Icon name="account-circle" size={125} color="black" />
        </View>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonR}
            mode="contained"
            onPress={handleCalcular}>
            Editar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
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
});

export default Perfil;
