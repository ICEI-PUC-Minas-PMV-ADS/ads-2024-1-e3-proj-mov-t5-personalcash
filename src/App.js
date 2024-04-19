import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

//import Main from './src/navigations/Main';
import Route from './src/navigations/Route';

import UserProvider from './src/contexts/UserContext';
import { PerfilProvider } from './src/contexts/PerfilContext';

const App = () => {
  return (
    <UserProvider>
      <PerfilProvider>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </PerfilProvider>
    </UserProvider>
  );
};

export default App;
