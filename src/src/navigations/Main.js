import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import CadastroCliente from '../pages/CadastroCliente';
import RegistroTreino from '../pages/RegistroTreino';
import TelaPrincipal from '../pages/TelaPrincipal';
import QuitarDivida from '../pages/QuitarDivida';
import RegistroCliente from '../pages/RegistroCliente';
import CadastroTreino from '../pages/CadastroTreino';
import EditCliente from '../pages/EditCliente';
import EditTreino from '../pages/EditTreino';


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        name="CadastroCliente"
        component={CadastroCliente}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Registro Treino"
        component={RegistroTreino}
        options={{
          header: () => null,
        }}
      />
      {/* Adicione as novas telas à pilha de navegação */}
      <Stack.Screen 
        name="TelaPrincipal" 
        component={TelaPrincipal}
        options={{
          header: () => null,
        }} 
      />
      <Stack.Screen 
        name="QuitarDivida" 
        component={QuitarDivida}
        options={{
          header: () => null,
        }} 
        />
        <Stack.Screen 
        name="RegistroCliente" 
        component={RegistroCliente}
        options={{
          header: () => null,
        }} 
        />
        <Stack.Screen 
        name="CadastroTreino" 
        component={CadastroTreino}
        options={{
          header: () => null,
        }} 
        />
        <Stack.Screen 
        name="EditCliente" 
        component={EditCliente}
        options={{
          header: () => null,
        }} 
        />
        <Stack.Screen 
        name="EditTreino" 
        component={EditTreino}
        options={{
          header: () => null,
        }} 
        />
    </Stack.Navigator>
  );
};

export default Main;
