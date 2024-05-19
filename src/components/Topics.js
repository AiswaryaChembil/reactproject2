import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Topics.css'; 

function Topics() {
  const cardData = [
    { id: 1, text: 'Eligibility' },
    { id: 2, text: 'F1 visa students' },
    { id: 3, text: 'Universities' },
    { id: 4, text: 'Admission' },
    { id: 5, text: 'Companies' },
    { id: 6, text: 'Jobs' },
  ];

  return (
    <Container className="my-5 bg py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col>
            <p className='mb-0'>Topics</p>
            <h2 className='mb-5'>Most searched ones</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {cardData.map((card, index) => (
            <Col
              key={card.id}
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center mb-4"
            >
              <Card className="w-100 h-145 topic-card bg-dark text-white">
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <Card.Text className="text-center">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center text-center mt-4">
          <Col>
            <span>Didn't find your topic? Start discussing</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Topics;
