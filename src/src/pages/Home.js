import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import TelaPrincipal from './TelaPrincipal';
import Perfil from './Perfil';
import RegistroCliente from './RegistroCliente';
import RegistroTreino from './RegistroTreino';

const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'main', title: 'Home', icon: 'home' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
    { key: 'clientes', title: 'Clientes', icon: 'account-group' },
    { key: 'treino', title: 'Treino', icon: 'weight-lifter' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    main: TelaPrincipal,
    perfil: Perfil,
    clientes: RegistroCliente,
    treino: RegistroTreino,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#0E4032' }} // Definindo o backgroundColor desejado
    />
  );
};

export default Home;
