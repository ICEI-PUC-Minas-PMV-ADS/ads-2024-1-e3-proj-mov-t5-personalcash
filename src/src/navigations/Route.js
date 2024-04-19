import React from 'react';

import {useUser} from '../contexts/UserContext';

import Main from './Main';
import Auth from './Auth';

const Route = () => {
  const {signed} = useUser();

  return(
    <>
    { // Se estiver logado
      signed
      ? <Main /> // Vai para a Home do App
      : <Auth /> // Se não para a parte de autenticação do App
    }
    </>
  )
}

export default Route;