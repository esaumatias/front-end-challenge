import React, { useContext, useState } from 'react';
import { createNaver } from '../../Services/FetchApi';
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import { Link } from "react-router-dom";

import AppContext from '../../Context/AppContext';

function Home() {
  const { token } = useContext(AppContext);
  const [naverInfos, setNaverInfos] = useState([{
    name: '',
    admission: '',
    job: '',
    project: '',
    birthdate: '',
    url: ''
  }]);

  function handleInfos({target}) {
    const { name, value } = target;
    setNaverInfos((prevState) => {
      return { ...prevState, [name]: value, };
    })
  }

  function submitInfos() {
    createNaver(naverInfos, token).then(() => {})
  }

  return (
    <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
     <Header style={{ justifySelf: "flex-end"}}/>
     <section style={{ display: "flex", flexDirection: "column", alignItems: "center",  width: "50%" }}>
        <div style={{ alignSelf: "start"}}>
          <Link to="/Home" style={{ display: "flex", marginTop: "40px", marginBottom: "40px", textDecoration: "none", color: "black"}}>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/less-than.png" alt="seta à esquerda" style={{ height: "25px"}} />
            <h5>Adicionar Naver</h5>
          </Link>
        </div>

      <Form onChange={({ target }) => handleInfos({ target })}>
        <Row className="mb-3" xs={2}>
          <Col style={{ marginBottom: "15px" }}>
            <Form.Label><strong>Nome</strong></Form.Label>
            <Form.Control placeholder="Nome" name="name"/>
          </Col>
          <Col style={{ marginBottom: "15px" }}>
            <Form.Label><strong>Data de Admissão</strong></Form.Label>
            <Form.Control placeholder="Data de Admissão" type="date" name="admission"/>
          </Col>
          <Col style={{ marginBottom: "15px" }}>
            <Form.Label><strong>Cargo</strong></Form.Label>
            <Form.Control placeholder="Cargo" name="job"/>
          </Col>
          <Col style={{ marginBottom: "15px" }}>
            <Form.Label><strong>Projetos</strong></Form.Label>
            <Form.Control placeholder="Projetos" name="project"/>
          </Col>
          <Col style={{ marginBottom: "15px" }}>
            <Form.Label><strong>Data de aniversario</strong></Form.Label>
            <Form.Control placeholder="Data de aniversario" name="birthdate" type="date"/>
          </Col>
          <Col style={{ marginBottom: "15px" }}>
            <Form.Label><strong>URL da foto</strong></Form.Label>
            <Form.Control placeholder="URL da foto" name="url"/>
          </Col>
        </Row>

        <Button variant="dark" onClick={submitInfos} style={{ alignSelf: "end"}}>
          Salvar
        </Button>
      </Form>
     </section>
    </Container>
  )
}

export default Home;
