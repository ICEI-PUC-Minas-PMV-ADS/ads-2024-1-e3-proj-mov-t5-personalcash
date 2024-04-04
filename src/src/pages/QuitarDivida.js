import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable, Button, Checkbox } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';

const QuitarDivida = ({ route }) => {
  const navigation = useNavigation();

  const { item } = route.params ? route.params : {};

  const handleCalcular = () => console.log('Salvo');

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([8]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items, setItems] = React.useState([
    {
      key: 1,
      data: '01/04/24',
      duracao: 60,
      valor: 100,
      pago: true, // Adicionando a propriedade pago com valor inicial true
    },{
      key: 2,
      data: '03/04/24',
      duracao: 90,
      valor: 130,
      pago: true,
    },
    {
      key: 3,
      data: '05/04/24',
      duracao: 30,
      valor: 50,
      pago: true,
    },
    {
      key: 4,
      data: '06/04/24',
      duracao: 120,
      valor: 200,
      pago: true,
    },
    {
      key: 5,
      data: '10/04/24',
      duracao: 60,
      valor: 100,
      pago: true,
    },
    {
      key: 6,
      data: '13/04/24',
      duracao: 90,
      valor: 130,
      pago: true,
    },
    {
      key: 7,
      data: '15/04/24',
      duracao: 30,
      valor: 50,
      pago: false,
    },
    {
      key: 8,
      data: '16/04/24',
      duracao: 120,
      valor: 200,
      pago: false,
    },
    {
      key: 9,
      data: '21/04/24',
      duracao: 80,
      valor: 85,
      pago: false,
    },
    {
      key: 10,
      data: '23/04/24',
      duracao: 100,
      valor: 30,
      pago: true,
    },
    {
      key: 11,
      data: '25/04/24',
      duracao: 65,
      valor: 90,
      pago: true,
    },
    {
      key: 12,
      data: '26/04/24',
      duracao: 70,
      valor: 120,
      pago: false,
    },
    {
      key: 13,
      data: '28/04/24',
      duracao: 50,
      valor: 80,
      pago: false,
    },
    {
      key: 14,
      data: '29/04/24',
      duracao: 130,
      valor: 30,
      pago: true,
    },
    {
      key: 15,
      data: '04/05/24',
      duracao: 45,
      valor: 50,
      pago: true,
    },
    {
      key: 16,
      data: '06/05/24',
      duracao: 140,
      valor: 100,
      pago: true,
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

  return (
    <Container>
      <Header title={'Quitar dívidas'} goBack={() => navigation.goBack()} />
      <Body>
        <View>
          <Text style={styles.name}>{item.nome + ' ' + item.sobrenome}</Text>
          <Text style={styles.apelido}>{item.apelido}</Text>
          <Text style={styles.divida}>
            {'Dívida total R$' + item.valorTreino.toFixed(2)}
          </Text>
        </View>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cellStyles}>Data</DataTable.Title>
            <DataTable.Title style={styles.cellStyles} numeric>Duração</DataTable.Title>
            <DataTable.Title style={styles.cellStyles} numeric>Valor</DataTable.Title>
            <DataTable.Title style={styles.cellStyles}>Pago</DataTable.Title>
          </DataTable.Header>

          {items.slice(from, to).map((item, index) => (
            <DataTable.Row key={item.key}>
              <DataTable.Cell style={styles.cellStyles}>{item.data}</DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles} numeric>{item.duracao + ' min'}</DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles} numeric>R$ {item.valor.toFixed(2)}</DataTable.Cell>
              <DataTable.Cell style={styles.cellStyles}>
                <Checkbox
                  status={item.pago ? 'checked' : 'unchecked'}
                  onPress={() => togglePago(index)}
                />
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
            onPress={handleCalcular}>
            Quitar dívida
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
  name: {
    marginTop: 30,
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    fontWeight: 600,
  },
  apelido: {
    marginTop: 5,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  divida: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 18,
    color: 'black',
  },
});

export default QuitarDivida;