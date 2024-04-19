// ESTE TRECHO DE CÓDIGO É PARA FAZER A IMPLEMENTAÇÃO DO "LOGIN" E "CADASTRO DE CONTA" DO PERSONAL
//  Ele checa se ele já tem uma conta com 'true' e 'false'.
import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [nome, setNome] = useState(false);

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        nome,
        setNome,
      }}>
      {children}
    </UserContext.Provider>
  );
}

// ESTOU CRIANDO O MEU PRÓPRIO HOOK
export function useUser(){
  const context = useContext(UserContext);
  const {signed, setSigned, nome, setNome} = context;
  return {signed, setSigned, nome, setNome};
}