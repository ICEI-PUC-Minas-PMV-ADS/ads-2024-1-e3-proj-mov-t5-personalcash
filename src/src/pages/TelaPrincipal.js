import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário
import { List } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import ImageLogo from '../components/ImageLogo';

import { useNavigation } from '@react-navigation/native'; // Importe a função useNavigation para acessar a navegação

const DATA = [
    {
      id: 1,
      nome: 'Cae',
      sobrenome: 'Euphrasio',
      apelido:'C',
      telefone: 31996721589,
      endereco: 'Belo Horizonte',
      valorTreino: 100,
      turnoTreino: 'Noite',
    },
    {
      id: 2,
      nome: 'João',
      sobrenome: 'Victor',
      apelido:'Jv',
      telefone: 31992524773,
      endereco: 'São Paulo',
      valorTreino: 150,
      turnoTreino: 'Manhã',
    },
    {
      id: 3,
      nome: 'Pedro',
      sobrenome: 'Henrique',
      apelido:'PH',
      telefone: 31993247645,
      endereco: 'Claudio',
      valorTreino: 200,
      turnoTreino: 'Tarde',
    },
    {
      id: 4,
      nome: 'Augusto',
      sobrenome: 'Silva',
      apelido:'AS',
      telefone: 31991345795,
      endereco: 'Rio de Janeiro',
      valorTreino: 150,
      turnoTreino: 'Manhã, tarde',
    },
    {
      id: 5,
      nome: 'Luis',
      sobrenome: 'Felipe',
      apelido:'LF',
      telefone: 31994357894,
      endereco: 'Belo Horizonte',
      valorTreino: 200,
      turnoTreino: 'Noite, tarde',
    },
  ];

const TelaPrincipal = () => { 
  const navigation = useNavigation('QuitarDivida'); // Obtenha a função de navegação

  // Calcula o valor total do treino somando os valores de treino de cada item em DATA
  const totalTreino = DATA.reduce((total, item) => total + item.valorTreino, 0);

  const renderItem = ({ item }) => (
    <List.Item
      title={item.nome +' '+ item.sobrenome}
      right={() => (
        <View style={styles.list}>
          <Text>{'R$' + item.valorTreino.toFixed(2)}</Text>
        </View>
      )}
      onPress={() => navigation.navigate('QuitarDivida', {item})} // Navegar para 'QuitarDivida' ao pressionar o item, já estou passando o os itens também através do '{item}'
    />
  );

  return (
    <Container>
      <Header title={'Home'} />
      <Body>
        <ImageLogo></ImageLogo>
      
        <View style={styles.retangulo}>
          <Text style={styles.textCentrado}>
            Total a receber R${totalTreino.toFixed(2)}
          </Text>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
