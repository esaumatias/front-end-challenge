import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser,] = useState([]);
  const [token, setToken] = useState('');
  const [navers, setNavers] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [addSubmitted, setAddSubmitted] = useState(false);

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
        setIndexCard,
        isLoading,
        setIsLoading,
        addSubmitted,
        setAddSubmitted
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
