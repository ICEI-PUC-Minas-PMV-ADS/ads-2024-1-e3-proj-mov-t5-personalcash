import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native'; // Importe o componente Image corretamente
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';
import ImageLogo from '../components/ImageLogo';

const CadastroConta = () => {
  const navigation = useNavigation();

  const handleAcountPress = () => {
    navigation.navigate('Login'); // Navega para a tela de Login
  };
  const handleCalcular = () => console.log('Salvo');

  return (
    <Container>
      <Header title={'Criar Conta'} />
      <Body>
        <ImageLogo></ImageLogo>
        <Input label="Nome" />
        <Input label="Email" />
        <Input label="Senha" />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonC}
            mode="contained"
            onPress={handleCalcular}>
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
