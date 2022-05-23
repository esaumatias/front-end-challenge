import React, { useContext, useEffect } from 'react';
import { getList } from '../../Services/FetchApi';
import { Container } from 'react-bootstrap'
import LogoNave from '../../Data/Imagens/nave.webp'

import AppContext from '../../Context/AppContext';

function Header() {
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
      <header style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
        <img src={LogoNave} alt="logoNave" style={{ width: '150px', marginTop: '20px'}}/>
        <button style={{ border: 'none', backgroundColor: 'transparent', textAlign: 'center' }}>Sair</button>
      </header>
    </Container>
  )
}

export default Header;