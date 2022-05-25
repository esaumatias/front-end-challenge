import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';
import { deleteNaver } from '../../Services/FetchApi';
import { Link } from 'react-router-dom';

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
  const { navers, setIndexCard, token, setIsLoading } = useContext(AppContext);

  function verificarCard(target) {
    const { name } = target;
    if (name) {
      setModalShow(true)
      setIndexCard(name);
    }
  }

  function RemoveCard(index) {
    const [show, setShow] = useState(false);
    const idNaverSelected = navers[index].id;
    
    function deleteNavers() {
      setShow(true)
      deleteNaver(idNaverSelected, token).then(() => {
        setTimeout(() => {
          setIsLoading(false);
          setIsLoading(true);
        }, "1000")
      });
    }
    
    return (
      <>
        <Button variant="primary" onClick={() => deleteNavers()}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" alt="lixo"/>
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Naver excluído
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Naver excluído com sucesso!
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  // function editCard(index) {
  //   const idNaverSelected = navers[index].id;
  //   deleteNaver(idNaverSelected, token).then(() => {
  //     setIsLoading(false);
  //     setIsLoading(true);
  //   });
  // }

  function ExludeModel(props) {
    const [show, setShow] = useState(false);
    const { value } = props;
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png" alt="lixo"/>
        </Button>

        <Link variant="primary" to="/Editar" onClick={() => setIndexCard(value)}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png" alt="editar" />
        </Link>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              Excluir Naver
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Tem certeza que deseja excluir este Naver?
            </p>
          </Modal.Body>
          {RemoveCard(value)}
        </Modal>
      </>
    );
  }
  
  return (
    <>
      <Row xs={1} md={4} className="g-2" onClick={({ target }) => verificarCard(target)}>
        {navers.map((value, index) => (
          <Col>
            <Card>
              <Card.Img variant="top" name={index} src={value.url} style={{ objectFit: "cover", maxHeight: "300px", filter: "grayscale(100%)" }}/>
              <Card.Body>
                <Card.Title>{value.name}</Card.Title>
                <Card.Text>{value.job_role}</Card.Text>
                <ExludeModel value={index} />
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
