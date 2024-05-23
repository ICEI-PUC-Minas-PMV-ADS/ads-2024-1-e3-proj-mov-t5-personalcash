import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Body from '../components/Body';
import Container from '../components/Container';
import Header from '../components/Header';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';
import { insertTreinos, updateTreinos } from '../services/WorkoutServices';

const CadastroTreino = ({ route }) => {
  const navigation = useNavigation();
  const { treino } = route.params ? route.params : {};

  const handleCancel = () => {
    // Clear all input fields
    setNome('');
    setInicio('');
    setDuracao('');
    setValor('');
    setPago(0); // Ensure it's a number
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [nome, setNome] = useState('');
  const [inicio, setInicio] = useState('');
  const [duracao, setDuracao] = useState('');
  const [valor, setValor] = useState('');
  const [pago, setPago] = useState(0); // Initialize with 0 as a number

  useEffect(() => {
    if (treino) {
      setNome(treino.nome);
      setInicio(treino.inicio);
      setDuracao(treino.duracao);
      setValor(treino.valor.toString()); // Convert to string to display correctly
      setPago(treino.pago); // Set directly, assuming it's already a number
    }
  }, [treino]);

  const handleCalcular = () => {
    if (!nome || !inicio || !duracao || !valor) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    const treinoData = {
      nome,
      data: moment(date).format('DD/MM/YYYY'),
      inicio,
      duracao,
      valor: parseFloat(valor), // Parse to float
      pago,
    };

    if (treino) {
      updateTreinos({ ...treinoData, id: treino.id }).then(() =>
        navigation.goBack()
      );
    } else {
      insertTreinos(treinoData).then(() => navigation.goBack());
    }
  };

  return (
    <Container>
      <Header title={'Cadastro de Treino'} goBack={() => navigation.goBack()} />
      <Body>

        <Input label="Nome" value={nome} onChangeText={setNome} />

        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data"
            value={moment(date).format('DD/MM/YYYY')}
            editable={false}
          />
        </TouchableOpacity>
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
              setDate(date || new Date()); // Set to current date if null
            }}
          />
        )}

        <Input label="Início" value={inicio} onChangeText={setInicio} />
        
        <Input
          label="Duração (min)"
          value={duracao}
          onChangeText={setDuracao}
          keyboardType="numeric"
        />
        <Input
          label="Valor do treino"
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.buttonC}
            mode="contained"
            onPress={handleCancel}>
            Cancelar
          </Button>
          <Button
            style={styles.buttonR}
            mode="contained"
            onPress={handleCalcular}>
            Registrar
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
    justifyContent: 'space-between',
  },
  buttonR: {
    backgroundColor: 'green',
    marginTop: 5,
    flex: 1,
    marginLeft: 15,
  },
  buttonC: {
    backgroundColor: 'red',
    marginTop: 5,
    flex: 1,
    marginRight: 15,
  },
});

export default CadastroTreino;
