import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { List } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import ImageLogo from '../components/ImageLogo';

import { getTreinos } from '../services/WorkoutServices';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const TelaPrincipal = () => { 
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [treinos, setTreinos] = useState([]);

  useEffect(() => {
    if (isFocused) {
      getTreinos().then((dados) => {
        setTreinos(dados);
      });
    }
  }, [isFocused]);

  // Calcula o valor total do treino somando os valores de treino de cada item em DATA
  const totalTreino = treinos.reduce((total, treino) => total + (!treino.pago ? parseFloat(treino.valor) : 0), 0);

  // Agrupa os treinos pelo nome e soma seus valores
  const treinosAgrupados = treinos.reduce((accumulator, treino) => {
    if (accumulator[treino.nome]) {
      accumulator[treino.nome].valorTotal += !treino.pago ? parseFloat(treino.valor) : 0;
    } else {
      accumulator[treino.nome] = {
        ...treino,
        valorTotal: !treino.pago ? parseFloat(treino.valor) : 0
      };
    }
    return accumulator;
  }, {});

  // Converte o objeto de treinos agrupados em uma lista
  const treinosUnicos = Object.values(treinosAgrupados).filter(treino => treino.valorTotal > 0); // Filtra clientes com valorTotal > 0

  const renderTreinos = ({ item }) => (
    <List.Item
      title={item.nome}
      right={() => (
        <View style={styles.list}>
          <Text>{'R$' + item.valorTotal.toFixed(2)}</Text>
        </View>
      )}
      onPress={() => navigation.navigate('QuitarDivida', { clienteNome: item.nome })}
    />
  );

  return (
    <Container>
      <Header title={'Home'} />
      <Body>
        <ImageLogo />
      
        <View style={styles.retangulo}>
          <Text style={styles.textCentrado}>
            Total a receber R${totalTreino.toFixed(2)}
          </Text>
        </View>

        <FlatList
          data={treinosUnicos}
          renderItem={renderTreinos}
          keyExtractor={(treino) => treino.id.toString()}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  textCentrado: {
    color: 'black',
    fontSize: 20,
  },
  list:{
    flexDirection: 'row', 
    alignItems: 'center',
  },
  retangulo: {
    marginTop: 10,
    marginBottom: 25,
    marginHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#ccc',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaPrincipal;