import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, Button, Checkbox } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { getTreinos, updateTreinos } from '../services/WorkoutServices';

import Container from '../components/Container';
import Header from '../components/Header';

const QuitarDivida = ({ route }) => {
  const { clienteNome } = route.params;
  const navigation = useNavigation();

  const isFocused = useIsFocused();
  const [treinos, setTreinos] = useState([]);
  const [totalDivida, setTotalDivida] = useState(0);

  useEffect(() => {
    if (isFocused) {
      getTreinos().then((dados) => {
        const filteredTreinos = dados.filter((treino) => treino.nome === clienteNome);
        setTreinos(filteredTreinos);

        const debt = filteredTreinos
                      .filter(treino => !treino.pago)  // Considerando apenas os não pagos
                      .reduce((acc, treino) => acc + parseFloat(treino.valor), 0);
        setTotalDivida(debt);
      });
    }
  }, [isFocused, clienteNome]);

  const handleCheckboxChange = (index) => {
    const updatedTreinos = [...treinos];
    updatedTreinos[index].pago = !updatedTreinos[index].pago;

    if (updatedTreinos[index].pago) {
      setTotalDivida(totalDivida - parseFloat(updatedTreinos[index].valor));
    } else {
      setTotalDivida(totalDivida + parseFloat(updatedTreinos[index].valor));
    }

    setTreinos(updatedTreinos);
  };

  const handleCalcular = async () => {
    try {
      for (const treino of treinos) {
        await updateTreinos(treino); // Atualiza cada treino individualmente
      }
      console.log('Dívida quitada e treinos salvos com sucesso');
      alert('Dívida quitada e treinos salvos com sucesso');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar os treinos:', error);
      alert('Erro ao salvar os treinos');
    }
  };

  const renderTreinos = () => {
    return treinos.map((treino, index) => (
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
      <Text style={styles.totalDivida}>Total Dívida: R$ {totalDivida.toFixed(2)}</Text>
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
  totalDivida: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: '600',
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    marginLeft: 15,
  },
});

export default QuitarDivida;