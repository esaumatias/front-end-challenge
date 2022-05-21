import React, { useContext} from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import LogoNave from '../../Data/Imagens/nave.webp'
import { requestToken } from '../../Services/FetchApi';

import AppContext from '../../Context/AppContext';

function Login() {

  const { user, setUser, setToken } = useContext(AppContext);

  function setEmail({ target }) {
    const { value } = target;
    setUser((prevState) => {
      return { ...prevState, email: value };
    })
  }

  function setPassword({ target }) {
    const { value } = target;
    setUser((prevState) => {
      return { ...prevState, password: value };
    })
  }

  function generateToken() {
    requestToken(user).then((data) => {
      setToken(data);
    });
  }

  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}>

      <section style={{border: '1px solid black', padding: '40px'}}>
        <img src={LogoNave} alt="Logo Nave.rs" style={{ width: '200px', marginBottom: '20px' }} />

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label><strong>E-mail</strong></Form.Label>
            <Form.Control type="email" placeholder="E-mail" onChange={({ target }) => setEmail({ target }) }/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label><strong>Senha</strong></Form.Label>
            <Form.Control type="password" placeholder="Senha" onChange={({ target }) => setPassword({ target }) }/>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="dark" onClick={generateToken}>
              Entrar
            </Button>
          </div>
        </Form>
      </section>
    </Container>
  )
}

export default Login;
