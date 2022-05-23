import React, { useContext, useEffect } from 'react';
import { getList } from '../../Services/FetchApi';
import { Container } from 'react-bootstrap'
import Header from '../../Components/Header/Header';

import AppContext from '../../Context/AppContext';

function Home() {
  const { token } = useContext(AppContext);

  useEffect(() => {
   if (token) {
    getList(token).then((data) => {
      console.log(data);
      console.log(token);
    });
   }
  }, [token])

  return (
    <Container>
     <Header />
    </Container>
  )
}

export default Home;
