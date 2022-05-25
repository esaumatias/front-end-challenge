import React, { useContext, useState } from 'react';
import { Form, Button, Container, Modal } from 'react-bootstrap'
import LogoNave from '../../Data/Imagens/nave.webp'
import { requestSignup, requestLogin } from '../../Services/FetchApi';
import { Redirect } from "react-router-dom";


import AppContext from '../../Context/AppContext';


function Login() {

  const { user, setUser, setToken, isLoading, setIsLoading } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    requestLogin(user).then((data) => {
      setToken(data.token)
      if (data.token) {
        setIsLoading(true)
      } else {
        setIsLoading(false)
      }
    })
    // requestSignup(user).then(() => {
    // });
    if (show) {
      return (
        <>
        <Button variant="dark" onClick={handleShow}>
          Entrar
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Erro</Modal.Title>
          </Modal.Header>
          <Modal.Body>E-mail ou senha inválido(s).</Modal.Body>
        </Modal>
        </>
      );
    }
    return <Button onClick={() => setShow(true)} variant="dark">Entrar</Button>;
  }

  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column'}}>
      {isLoading ? <Redirect to="/Home" /> : (
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
               {generateToken()}
            </div>
          </Form>
        </section>
      )}
    </Container>
  )
}

export default Login;
