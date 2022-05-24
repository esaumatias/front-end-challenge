import React, { useContext, useState } from 'react';
import { createNaver } from '../../Services/FetchApi';
import { Container, Form, Row, Col, Button, Modal } from 'react-bootstrap'
import Header from '../../Components/Header/Header';
import { Link } from "react-router-dom";

import AppContext from '../../Context/AppContext';

function MyVerticallyCenteredModal(props) {
  const { addSubmitted } = useContext(AppContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {addSubmitted ? (
        <><Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Naver criado
          </Modal.Title>
        </Modal.Header><Modal.Body>
            <p>
              Naver criado com sucesso!
            </p>
          </Modal.Body></>
      ) : (
        <><Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Error
            </Modal.Title>
          </Modal.Header><Modal.Body>
              <p>
                confira os dados inseridos
              </p>
            </Modal.Body></>
      )}
      
    </Modal>
  );
}

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const { token, setAddSubmitted } = useContext(AppContext);
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
    console.log(value);
  }

  function submitInfos() {
    createNaver(naverInfos, token).then((data) => {
      if(data.statusCode === 400) {
        setAddSubmitted(false);
      } else {
        setAddSubmitted(true)
      }
    })
    setModalShow(true)
  }
  return (
    <>
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
            <Row  className="align-items-center">
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Nome</strong></Form.Label>
                <Form.Control placeholder="Nome" name="name"/>
              </Col>
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Data de Admissão</strong></Form.Label>
                <Form.Control placeholder="Data de Admissão" type="text" name="admission"/>
              </Col>
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Cargo</strong></Form.Label>
                <Form.Control placeholder="Cargo" name="job"/>
              </Col>
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Projetos</strong></Form.Label>
                <Form.Control placeholder="Projetos" name="project"/>
              </Col>
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>Data de aniversario</strong></Form.Label>
                <Form.Control placeholder="Data de aniversario" name="birthdate" type="text"/>
              </Col>
              <Col style={{ marginBottom: "15px" }} sm='6' className="my-1">
                <Form.Label><strong>URL da foto</strong></Form.Label>
                <Form.Control placeholder="URL da foto" name="url"/>
              </Col>
            </Row>

          </Form>
          <Button variant="dark" onClick={submitInfos} style={{ alignSelf: "end", marginTop: "15px"}}>
            Salvar
          </Button>
      </section>
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Home;
