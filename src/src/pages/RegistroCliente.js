import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário
import {Provider as PaperProvider, DataTable, Button } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

import { useNavigation } from '@react-navigation/native'; // Importe a função useNavigation para acessar a navegação

const RegistroCliente = () => {
  // Tive que colocar o 'ROUTE' para receber os 'itens' da tela 'TelaPrincipal'
  const navigation = useNavigation(); // Obtenha a função de navegação

  //Variáveis para a TABELA funcionar
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([8]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  //Alterar essa parte depois
  const [items] = React.useState([
    {
      key: 1,
      nome: 'Cae',
      sobrenome: 'Euphrasio',
      data: '01/04/24',
    },
    {
      key: 2,
      nome: 'Joao',
      sobrenome: 'Victor',
      data: '03/04/24',
    },
    {
      key: 3,
      nome: 'Pedro',
      sobrenome: 'Henrique',
      data: '05/04/24',
    },
    {
      key: 4,
      nome: 'Luiz',
      sobrenome: 'Felipe',
      data: '06/04/24',
    },
    {
      key: 5,
      nome: 'Augusto',
      sobrenome: 'Cesar',
      data: '10/04/24',
    },
    {
      key: 6,
      nome: 'Daniel',
      sobrenome: 'Dutra',
      data: '13/04/24',
    },
    {
      key: 7,
      nome: 'Cesar',
      sobrenome: 'Silva',
      data: '15/04/24',
    },
    {
      key: 8,
      nome: 'Vitor',
      sobrenome: 'Senna',
      data: '16/04/24',
    },
    {
      key: 9,
      nome: 'Matheus',
      sobrenome: 'Severino',
      data: '21/04/24',
    },
    {
      key: 10,
      nome: 'João',
      sobrenome: 'Ferreira',
      data: '23/04/24',
    },
    {
      key: 11,
      nome: 'Carlos',
      sobrenome: 'José',
      data: '25/04/24',
    },
    {
      key: 12,
      nome: 'Zé',
      sobrenome: 'Ramalho',
      data: '26/04/24',
    },
    {
      key: 13,
      nome: 'Lucas',
      sobrenome: 'Silveira',
      data: '28/04/24',
    },
    {
      key: 14,
      nome: 'Luan',
      sobrenome: 'Costa',
      data: '29/04/24',
    },
    {
      key: 15,
      nome: 'Jean',
      sobrenome: 'Jordan',
      data: '04/05/24',
    },
    {
      key: 16,
      nome: 'Julho',
      sobrenome: 'Prestes',
      data: '06/05/24',
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage, setPage]);

  return (
    <Container>
      <Header title={'Registro dos Clientes'} />
      <Body>
        <View>
          <Text style={styles.titulo}>Clientes</Text>
        </View>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cellStyles}>
              Nome completo
            </DataTable.Title>
            <DataTable.Title style={styles.cellStyles}>
              Data de cadastro
            </DataTable.Title>
            <DataTable.Title style={styles.cellStyles}></DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell style={styles.cellStyles}>
                {item.nome + ' ' + item.sobrenome}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles}>
                {item.data}
              </DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles}>
                <TouchableOpacity onPress={() => handleDelete(item.key)}>
                  <Icon name="delete" size={21} color="red" />
                </TouchableOpacity>
              </DataTable.Cell>
            </DataTable.Row>
          ))}

          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / itemsPerPage)}
            onPageChange={(page) => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            //numberOfItemsPerPage={itemsPerPage}
            //onItemsPerPageChange={onItemsPerPageChange}
            showFastPaginationControls
            //selectPageDropdownLabel={'Rows per page'}
          />
        </DataTable>

        <Button
          style={styles.buttonR}
          mode="contained"
          onPress={() => navigation.navigate('CadastroCliente')}>
          Adicionar
        </Button>
      </Body>
    </Container>
  );
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
    fontWeight: 600,
  },
});

export default RegistroCliente;