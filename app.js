import React from 'react';
import { Container, Navbar, Nav, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Mon Application React</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Accueil</Nav.Link>
              <Nav.Link href="#">À propos</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <h1 className="text-center mb-4">Bienvenue dans mon app React avec React-Bootstrap</h1>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body>
                <Card.Title>Carte 1</Card.Title>
                <Card.Text>
                  Ceci est une carte d'exemple. Vous pouvez la modifier selon vos besoins.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body>
                <Card.Title>Carte 2</Card.Title>
                <Card.Text>
                  Une autre carte pour démonstration avec React-Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body>
                <Card.Title>Carte 3</Card.Title>
                <Card.Text>
                  Utilisez des composants Bootstrap pour créer une interface agréable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
