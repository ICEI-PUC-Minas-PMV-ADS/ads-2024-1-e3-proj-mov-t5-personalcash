import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
//import {Picker} from '@react-native-community/picker';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { insertTreinos, updateTreinos, deleteTreinos } from '../services/WorkoutServices';

const EditTreino = ({navigation, route}) => {
  const { treino } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [inicio, setInicio] = useState('');
  const [duracao, setDuracao] = useState('');
  const [valor, setValor] = useState('');
  const [pago, setPago] = useState(0);

  useEffect(() => {
    if (treino) {
      setNome(treino.nome);
      setData(treino.data);
      setInicio(treino.inicio);
      setDuracao(treino.duracao.toFixed(0));
      setValor(treino.valor.toFixed(2));
      setPago(treino.pago == 0);
    }
  }, [treino]);

  const handleCalcular = () => {
    if (treino) {
      console.log(treino);
      updateTreinos({
        nome: nome,
        data: data,
        inicio: inicio,
        duracao: duracao,
        valor: valor,
        pago: pago,
        id: treino.id
      }).then();
    } else {
      insertTreinos({
        nome: nome,
        data: data,
        inicio: inicio,
        duracao: duracao,
        valor: valor,
        pago: pago
      }).then();
    }
    navigation.goBack();
  };

  const handleExcluir = () => {
    deleteTreinos(treino.id).then();
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={'Editar Treino'} goBack={() => navigation.goBack()} />
      <Body>
        <Input
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format('DD/MM/YYYY'));
            }}
          />
        )}
        <TouchableOpacity onPress={() => setShow(true)}>
          <Input label="Data do Cadastro" value={data} editable={false} />
        </TouchableOpacity>
        <Input
          label="Inicio do treino"
          value={inicio}
          onChangeText={(text) => setInicio(text)}
        />
        <Input
          label="Duração do treino em (min)"
          value={duracao}
          onChangeText={(text) => setDuracao(text)}
          keyboardType="numeric" // Apenas números
        />
        <Input
          label="Valor do treino"
          value={valor}
          onChangeText={(text) => setValor(text)}
          keyboardType="numeric" // Apenas números
        />

        <View style={styles.buttonContainer}>
          <Button style={styles.buttonC} mode="contained" onPress={handleExcluir}>
            Excluir Treino
          </Button>
          <Button style={styles.buttonR} mode="contained" onPress={handleCalcular}>
            Salvar
          </Button>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    flex: 1,
    marginLeft: 15
  },
  buttonC: {
    backgroundColor: 'red',
    marginTop: 5,
    flex: 1,
    marginRight: 15
  }
});

export default EditTreino;
