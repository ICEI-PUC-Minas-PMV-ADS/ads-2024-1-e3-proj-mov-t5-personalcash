import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário


import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

const Perfil = () => {

  const handleCalcular = () => console.log('Salvo');
  
  return (
    <Container>
      <Header title={'Perfil'} />
      <Body>
      <View style={styles.iconContainer}>
          <Icon name="account-circle" size={125} color="black" />
      </View>
      <Input
          label="Nome"
      />
      <Input
          label="Email"
      />
      <Input
          label="Senha"
      />
      <View style={styles.buttonContainer}>
          <Button style={styles.buttonC} mode="contained" onPress={handleCalcular}>
            Cancelar
          </Button>
          <Button style={styles.buttonR} mode="contained" onPress={handleCalcular}>
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
  buttonC: {
    backgroundColor: 'red',
    marginTop: 5,
    flex: 1,
    marginRight: 15,
  },
});

export default Perfil;
