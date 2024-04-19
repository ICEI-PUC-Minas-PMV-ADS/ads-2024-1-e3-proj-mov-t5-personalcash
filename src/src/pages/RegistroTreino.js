import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DataTable, Button } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

import { useIsFocused } from '@react-navigation/native';
import { getTreinos } from '../services/WorkoutServices';
//import { getClientes } from '../services/ClientesServicesDB';
import { useNavigation } from '@react-navigation/native';

const RegistroTreino = () => {
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    getTreinos().then((dados) => {
      setTreinos(dados);
    });
  }, [isFocused]);

  const renderTreinos = treinos.map((treino) => (
    <TouchableOpacity onPress={() => navigation.navigate('EditTreino', { treino })} key={treino.key}>
      <DataTable.Row>
        <DataTable.Cell style={styles.cellLine}>{treino.nome}</DataTable.Cell>
      {/* Renderizar os clientes dentro desta linha de treino
        {clientes.map((cliente) => (
        <DataTable.Cell key={cliente.id} style={styles.cellLine}>{cliente.nome}</DataTable.Cell>
        ))}
          {/* Restante das células */}
        <DataTable.Cell style={styles.cellLine}>{treino.data}</DataTable.Cell>
        <DataTable.Cell style={styles.cellLine}>{treino.inicio}</DataTable.Cell>
        <DataTable.Cell style={styles.cellLine}>{treino.duracao}</DataTable.Cell>
        <DataTable.Cell style={styles.cellLine}>{treino.valor}</DataTable.Cell>
      </DataTable.Row>
    </TouchableOpacity>
  ));

  return (
    <Container>
      <Header title={'Registro dos Treinos'} />
      <Text style={styles.titulo}>Treinos</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.cellStyles}>Nome</DataTable.Title>
          <DataTable.Title style={styles.cellStyles}>Data</DataTable.Title>
          <DataTable.Title style={styles.cellStyles}>Início</DataTable.Title>
          <DataTable.Title style={styles.cellStyles}>Duração (min)</DataTable.Title>
          <DataTable.Title style={styles.cellStyles}>Valor</DataTable.Title>
        </DataTable.Header>
        {renderTreinos}
      </DataTable>
      <Button style={styles.buttonR} mode="contained" onPress={() => navigation.navigate('CadastroTreino')}>
        Adicionar
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  cellStyles: {
    flex: 1,
    textAlignVertical: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  cellLine: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
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

export default RegistroTreino