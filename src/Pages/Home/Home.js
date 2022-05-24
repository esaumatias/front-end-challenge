import React, { useContext, useEffect } from 'react';
import { getList } from '../../Services/FetchApi';
import { Container, Button } from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import CardsNavers from '../../Components/CardsNavers/CardsNavers';
import { Link } from "react-router-dom";

import AppContext from '../../Context/AppContext';

function Home() {
  const { token, setNavers } = useContext(AppContext);

  useEffect(() => {
   if (token) {
    getList(token).then((data) => {
      setNavers(data);
    });
   }
  }, [setNavers, token])

  return (
    <Container>
    <Header />
    <div className="d-grid gap-2">
      <Link to="/Adicionar">
      <Button variant="dark">
        Entrar
      </Button>
      </Link>
    </div>
    <CardsNavers />
    </Container>
  )
}

export default Home;
