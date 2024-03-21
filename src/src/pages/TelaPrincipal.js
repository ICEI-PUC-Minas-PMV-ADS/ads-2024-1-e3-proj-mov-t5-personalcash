import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import ImageLogo from '../components/ImageLogo';

const TelaPrincipal = () => {
  return (
    <Container>
      <Header title={'Home'} />
      <Body>
        <ImageLogo></ImageLogo>
        {/* ALTERAR ESSE TRECHO DE CÓDIGO DEPOIS */}
        <View style={styles.containerRetangulo}>
          <View style={styles.retangulo}>
            <Text style={styles.textCentrado}>
              Descrição: valor total que os clientes devem.
            </Text>
          </View>
          {/* Novo trecho de código inserido aqui */}
          <View style={styles.containerCliente}>
            <View style={styles.retanguloCliente}>
              <View style={styles.clienteContainer}>
                <TouchableOpacity onPress={() => console.log('Clicou no cliente!')}>
                  <Text style={styles.textCentradoCliente}>Cliente 1                    Valor</Text>
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => console.log('Ícone clicado!')}>
                  <Icon name="trash-can-outline" size={32} color="black" />
                </TouchableOpacity>
              </View>

              <View style={styles.clienteContainer}>
                <TouchableOpacity onPress={() => console.log('Clicou no cliente!')}>
                  <Text style={styles.textCentradoCliente}>Cliente 2                    Valor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Ícone clicado!')}>
                  <Icon name="trash-can-outline" size={32} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Fim do novo trecho de código */}
        </View>
        {/* ALTERAR ATÉ ESSA LINHA */}
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  /* ALTERAR ESSE TRECHO DE CÓDIGO DEPOIS */
  containerRetangulo: {
    flex: 1,
    alignItems: 'center',
  },
  textCentrado: {
    color: 'black',
    fontSize: 25,
  },
  retangulo: {
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#ccc',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerCliente: {
    marginTop:25,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    padding: 10,
  },
  retanguloCliente: {
    alignItems: 'center',
  },
  textCentradoCliente: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#999',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Removido o row-reverse para o ícone ficar à esquerda do texto na pag principal
  },
  clienteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  /* ALTERAR ATÉ ESSA LINHA */
});

export default TelaPrincipal;
