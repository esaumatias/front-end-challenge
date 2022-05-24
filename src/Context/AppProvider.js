import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser,] = useState([]);
  const [token, setToken] = useState('');
  const [navers, setNavers] = useState([]);
  const [indexCard, setIndexCard] = useState(0);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        navers,
        setNavers,
        indexCard,
        setIndexCard
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
