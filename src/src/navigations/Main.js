import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroConta from '../pages/CadastroConta';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import CadastroCliente from '../pages/CadastroCliente';
import CadastroTreino from '../pages/CadastroTreino';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="CadastroConta">
      <Stack.Screen
        name="Cadastrar"
        component={CadastroConta}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Cadastro Cliente"
        component={CadastroCliente}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Cadastro Treino"
        component={CadastroTreino}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
