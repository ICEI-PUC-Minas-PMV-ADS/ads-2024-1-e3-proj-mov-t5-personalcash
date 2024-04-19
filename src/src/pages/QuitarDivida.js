import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, Button, Checkbox } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

const QuitarDivida = ({ route }) => {
  const { treino } = route.params;
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const [treinosSelecionados, setTreinosSelecionados] = useState([]);

  useEffect(() => {
    setTreinosSelecionados(Array.isArray(treino) ? treino : [treino]);
  }, [isFocused, treino]);

  const handleCalcular = () => console.log('Salvo');

  const handleCheckboxChange = (index) => {
    const updatedTreinos = [...treinosSelecionados];
    updatedTreinos[index].pago = !updatedTreinos[index].pago;
    setTreinosSelecionados(updatedTreinos);
  };

  const renderTreinos = () => {
    return treinosSelecionados.map((treino, index) => (
      <DataTable.Row key={index}>   
        <DataTable.Cell style={styles.cellLine}>{treino.data}</DataTable.Cell>
        <DataTable.Cell style={styles.cellLine}>{treino.duracao}</DataTable.Cell>
        <DataTable.Cell style={styles.cellLine}>{treino.valor}</DataTable.Cell>
        <DataTable.Cell style={styles.cellLine}>
          <Checkbox
            status={treino.pago ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange(index)}
          />
        </DataTable.Cell>
      </DataTable.Row>
    ));
  };

  return (
    <Container>
      <Header title={'Quitar dívidas'} goBack={() => navigation.goBack()} />
      <Text style={styles.titulo}>Treinos</Text>
      <DataTable>
        <DataTable.Header>
            <DataTable.Title style={styles.cellStyles}>Data</DataTable.Title>
            <DataTable.Title style={styles.cellStyles}>Duração (min)</DataTable.Title>
            <DataTable.Title style={styles.cellStyles}>Valor</DataTable.Title>          
            <DataTable.Title style={styles.cellStyles}>Pago</DataTable.Title>
        </DataTable.Header>
        {renderTreinos()}
      </DataTable>
      <Button
        style={styles.buttonR}
        mode="contained"
        onPress={handleCalcular}>
        Quitar dívida
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
  titulo: {
    marginTop: 30,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: '600',
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    marginLeft: 15,
  },
});

export default QuitarDivida;
