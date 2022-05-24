import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col, Modal } from 'react-bootstrap';

import './CardsNavers.css';

function MyVerticallyCenteredModal(props) {
  const { indexCard, navers } = useContext(AppContext);
  console.log(indexCard);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     {navers.length > 0 ? (
        <section className="containerModal">
          <div className="left">
            <img  src={navers[indexCard].url} alt="place" />
          </div>
          <div className="right">
          <Modal.Header closeButton>
          </Modal.Header>
          <h2>{navers[indexCard].name}</h2>
            <p>{navers[indexCard].job_role}</p>
            <strong>Idade</strong>
            <p>25</p>
            <strong>Tempo de empresa</strong>
            <p>5</p>
            <strong>Projetos que Participou</strong>
            <p>{navers[indexCard].project}</p>
          </div>
        </section>
     ) : null}
    </Modal>
  );
}

function CardsNavers() {
  const [modalShow, setModalShow] = useState(false);
  const { navers, setIndexCard } = useContext(AppContext);
  function verificarCard(target) {
    const { name } = target;
    setModalShow(true)
    setIndexCard(name);
  }
  return (
    <>
      <Row xs={1} md={4} className="g-2" onClick={({ target }) => verificarCard(target)}>
        {navers.map((value, index) => (
          <Col>
            <Card>
              <Card.Img variant="top" name={index} src={value.url}/>
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>{value.job_role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CardsNavers;
