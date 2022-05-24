import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Card, Row, Col } from 'react-bootstrap';

function CardsNavers() {
  const { navers } = useContext(AppContext);
  
  return (
    <Row xs={1} md={4} className="g-2">
      {navers.map((value, index) => (
        <Col>
          <Card key={index}>
            <Card.Img variant="top" src={value.url}/>
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Text>{value.job_role}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardsNavers;
