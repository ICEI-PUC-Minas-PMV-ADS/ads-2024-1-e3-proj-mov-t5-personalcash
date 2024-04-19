import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as PaperProvider, DataTable, Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { getClientes } from '../services/ClientesServicesDB';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';


const RegistroCliente = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [clientes, setClientes] = useState([]);

  useEffect(() => {

    getClientes().then((dados) => {
        setClientes(dados);
        //console.log(dados);
      });

  },[isFocused]);

  const renderClientes = clientes.map((cliente) => (
    <DataTable.Row key={cliente.key}>
      <DataTable.Cell style={styles.cellStyles}>
        {cliente.nome} {cliente.sobrenome}
      </DataTable.Cell>
      <DataTable.Cell style={styles.cellStyles}>
        {cliente.data}
      </DataTable.Cell>
      <DataTable.Cell style={styles.cellStyles}>
        <TouchableOpacity onPress={() => navigation.navigate('EditCliente', {cliente})}>
          <Icon name="playlist-edit" size={25} color="black" />
        </TouchableOpacity>
      </DataTable.Cell>
    </DataTable.Row>
  ));

  return (
    <Container>
      <Header title={'Registro dos Clientes'} />
      <Text style={styles.titulo}>Clientes</Text>
        <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.cellStyles}>Nome completo</DataTable.Title>
          <DataTable.Title style={styles.cellStyles}>Data de cadastro</DataTable.Title>
          <DataTable.Title style={styles.cellStyles}></DataTable.Title>
        </DataTable.Header>
        {renderClientes}
      </DataTable>
      <Button
        style={styles.buttonR}
        mode="contained"
        onPress={() => navigation.navigate('CadastroCliente')}>
        Adicionar
      </Button>
    </Container>
  )
};

const styles = StyleSheet.create({
  cellStyles: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    marginLeft: 15,
  },
  titulo: {
    marginTop: 30,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
});

export default RegistroCliente;
