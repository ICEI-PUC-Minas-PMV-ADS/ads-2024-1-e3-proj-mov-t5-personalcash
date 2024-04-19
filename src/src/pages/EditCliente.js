import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { insertClientes, updateClientes, deleteClientes } from '../services/ClientesServicesDB';

const EditCliente = ({navigation, route}) => {
  const { cliente } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [apelido, setApelido] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));


  useEffect(() => {
    if (cliente) {
      setNome(cliente.nome);
      setSobrenome(cliente.sobrenome);
      setApelido(cliente.apelido);
      setTelefone(cliente.telefone);
      setData(cliente.data);
    }
  }, [cliente]);

  const handleCalcular = () => {
    if(cliente){
      console.log(cliente);

      updateClientes(
        {
          nome: nome,
          sobrenome: sobrenome,
          apelido: apelido,
          telefone: telefone,
          data: data,
          id: cliente.id
        }
      ).then();
      
    }else{
      insertClientes(
        {
          nome: nome,
          sobrenome: sobrenome,
          apelido: apelido,
          telefone: telefone,
          data: data
        }
      ).then();
    }
    navigation.goBack();

    };

  const handleExcluir = () =>{
    deleteClientes(cliente.id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Editar Cliente'} goBack={() => navigation.goBack()} />
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
        {show &&(
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format('DD/MM/YYYY'));
            }}
            />
        )}
        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data do Cadastro"
            value={data}
            editable={false}
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonC}
            mode="contained"
            onPress={handleExcluir}>
            Excluir Cliente
          </Button>
          <Button
            style={styles.buttonR}
            mode="contained"
            onPress={handleCalcular}>
            Salvar
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

export default EditCliente;
