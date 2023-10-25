import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  // Create React elements without JSX
  const container = React.createElement(Container, null,
    React.createElement(Row, null,
      React.createElement(Col, null,
        React.createElement('h1', null, 'Welcome to Your React App'),
        React.createElement('p', null, 'This is a sample React app using react-bootstrap.'),
        React.createElement(Button, { variant: 'primary' }, 'Click me')
      )
    )
  );

  return container;
}
function App() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Welcome to Your React App</h1>
            <p>This is a sample React app using react-bootstrap.</p>
            <Button variant="primary">Click me</Button>
          </Col>
        </Row>
      </Container>
    );
  }
  function App() {
    return (
      <>
        {/* React Fragment */}
        <div className="App">
          <Container>
            <Row>
              <Col>
                <h1>Welcome to Your React App</h1>
                <p>This is a sample React app using react-bootstrap.</p>
                <Button variant="primary">Click me</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  function App() {
    return (
      <>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand>React-Bootstrap App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar>
  
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