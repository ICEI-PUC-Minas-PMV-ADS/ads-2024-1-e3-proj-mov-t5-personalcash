import React, { createContext, useContext, useState } from 'react';

const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
  const [foundProfile, setFoundProfile] = useState(null);

  return (
    <PerfilContext.Provider value={{ foundProfile, setFoundProfile }}>
      {children}
    </PerfilContext.Provider>
  );
};

export const usePerfil = () => useContext(PerfilContext);
