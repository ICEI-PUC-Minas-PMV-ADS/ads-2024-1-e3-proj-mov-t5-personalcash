import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

const App = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [apelido, setApelido] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [valorTreino, setValorTreino] = useState('');
  const [turnoTreino, setTurnoTreino] = useState('');

  const handleCalcular = () => console.log('Salvo');

  return (
    <Container>
      <Header title={'Cadastro de Cliente'} />
      <Body>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Input
          label="Sobrenome"
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text)}
        />
        <Input
          label="Apelido"
          value={apelido}
          onChangeText={(text) => setApelido(text)}
        />
        <Input
          label="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
          keyboardType="numeric" // Apenas números
        />
        <Input
          label="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />
        <Input
          label="Valor do treino"
          value={valorTreino}
          onChangeText={(text) => setValorTreino(text)}
          keyboardType="numeric" // Apenas números
        />
        <Input
          label="Turno do treino"
          value={turnoTreino}
          onChangeText={(text) => setTurnoTreino(text)}
        />
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
            Registrar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
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

export default App;
