import React, { useState } from 'react';
import AppContext from './AppContext';
// import { requestToken } from '../Services/FetchApi';

function AppProvider({ children }) {
  const [categories, setCategories,] = useState([]);

  // useEffect(() => {
  //   requestToken('esaumatias@gmail.com', 'dxkjxzçlkjcçkzxcj').then((data) => {
  //     console.log(data);
  //   });
  // }, [])

  return (
    <AppContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
