import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
  function App() {
    return (
      <>
        <div className="App">
        <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
          <Container>
            <Row>
              <Col>
                <h1>Welcome to Your React App</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="card-image-1.jpg" />
                  <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                      This is the first card in the example.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
  
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="card-image-2.jpg" />
                  <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                      This is the second card in the example.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
  
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="card-image-3.jpg" />
                  <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                      This is the third card in the example.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
export default App;