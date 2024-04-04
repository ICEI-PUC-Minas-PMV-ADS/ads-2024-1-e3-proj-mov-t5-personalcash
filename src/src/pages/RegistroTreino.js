import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Importe o ícone necessário
import { DataTable, Button } from 'react-native-paper';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

import { useNavigation } from '@react-navigation/native'; // Importe a função useNavigation para acessar a navegação

const RegistroTreino = () => { // Tive que colocar o 'ROUTE' para receber os 'itens' da tela 'TelaPrincipal'
  const navigation = useNavigation(); // Obtenha a função de navegação

  const handleCalcular = () => console.log('Salvo');

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([8]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items, setItems] = React.useState([
    {
      key: 1,
      nome: 'Cae',
      sobrenome: 'Euphrasio',
      inicio: '09:00',
      duracao: 60,
      valor: 100,
    },
    {
      key: 2,
      nome: 'Joao',
      sobrenome: 'Victor',
      inicio: '13:00',
      duracao: 90,
      valor: 130,
    },
    {
      key: 3,
      nome: 'Pedro',
      sobrenome: 'Henrique',
      inicio: '14:00',
      duracao: 30,
      valor: 50,
    },
    {
      key: 4,
      nome: 'Luiz',
      sobrenome: 'Felipe',
      inicio: '08:00',
      duracao: 120,
      valor: 200,
    },
    {
      key: 5,
      nome: 'Augusto',
      sobrenome: 'Cesar',
      inicio: '19:00',
      duracao: 60,
      valor: 100,
    },
    {
      key: 6,
      nome: 'Daniel',
      sobrenome: 'Dutra',
      inicio: '10:00',
      duracao: 90,
      valor: 130,
    },
    {
      key: 7,
      nome: 'Cesar',
      sobrenome: 'Silva',
      inicio: '18:30',
      duracao: 30,
      valor: 50,
    },
    {
      key: 8,
      nome: 'Vitor',
      sobrenome: 'Senna',
      inicio: '19:30',
      duracao: 120,
      valor: 200,
    },
    {
      key: 9,
      nome: 'Matheus',
      sobrenome: 'Severino',
      inicio: '20:30',
      duracao: 80,
      valor: 85,
    },
    {
      key: 10,
      nome: 'João',
      sobrenome: 'Ferreira',
      inicio: '21:30',
      duracao: 100,
      valor: 30,
    },
    {
      key: 11,
      nome: 'Carlos',
      sobrenome: 'José',
      inicio: '22:00',
      duracao: 65,
      valor: 90,
    },
    {
      key: 12,
      nome: 'Zé',
      sobrenome: 'Ramalho',
      inicio: '22:30',
      duracao: 70,
      valor: 120,
    },
    {
      key: 13,
      nome: 'Lucas',
      sobrenome: 'Silveira',
      inicio: '06:00',
      duracao: 50,
      valor: 80,
    },
    {
      key: 14,
      nome: 'Luan',
      sobrenome: 'Costa',
      inicio: '07:00',
      duracao: 130,
      valor: 30,
    },
    {
      key: 15,
      nome: 'Jean',
      sobrenome: 'Jordan',
      inicio: '07:30',
      duracao: 45,
      valor: 50,
    },
    {
      key: 16,
      nome: 'Julho',
      sobrenome: 'Prestes',
      inicio: '08:30',
      duracao: 140,
      valor: 100,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage, setPage]);

  const togglePago = (index) => {
    const newItems = [...items];
    newItems[index].pago = !newItems[index].pago;
    setItems(newItems);
  };

//Obs.: por enquanto a data está fixa, mas ela será um input estilo 'dropdown', em que, o usuário vai escolher o dia que será filtrado

  return (
    <Container>
      <Header title={'Registro dos Treinos'} />
      <Body>
        <View>
          <Text style={styles.titulo}>Treinos</Text>
          <Text style={styles.data}>01/04/24</Text>
        </View>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cellStyles}>Nome</DataTable.Title>
            <DataTable.Title style={styles.cellStyles} numeric>Inicío</DataTable.Title>
            <DataTable.Title style={styles.cellStyles} numeric>Duração</DataTable.Title>
            <DataTable.Title style={styles.cellStyles} numeric>Valor</DataTable.Title>
            <DataTable.Title style={styles.cellStyles}></DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item, index) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell style={styles.cellStyles}>{item.nome + ' ' + item.sobrenome}</DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles} numeric>{item.inicio}</DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles} numeric>{item.duracao + ' min'}</DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles} numeric>R$ {item.valor.toFixed(2)}</DataTable.Cell>
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
            showFastPaginationControls
          />
        </DataTable>

        <Button
            style={styles.buttonR}
            mode="contained"
            onPress={() => navigation.navigate('CadastroTreino')}>
            Registrar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  data:{
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
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

export default RegistroTreino;