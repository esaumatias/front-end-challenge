import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [user, setUser,] = useState([]);
  const [token, setToken] = useState('');

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
