import React, { useContext, useEffect } from 'react';
import { getList } from '../../Services/FetchApi';
import { Container, Button } from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import { Link } from "react-router-dom";

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
     <div className="d-grid gap-2">
            <Link to="/Adicionar">
              <Button variant="dark">
                Entrar
              </Button>
            </Link>
          </div>
    </Container>
  )
}

export default Home;
