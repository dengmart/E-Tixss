import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./instyle.css";
function Loginform() {
  console.log(Loginform);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container class>
          <Navbar.Brand href="#home">
            <img src="/real.svg" alt="Etixss" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#home">Tickets</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="wrapper-main">
        <Card style={{ width: "30rem" }} className="kard">
          <Card.Body>
            <Card.Title>Log in</Card.Title>
            <Card.Text>
              <>
                <Form.Control
                  type="Email"
                  placeholder="Email"
                  aria-label="Disabled input example"
                  enabled
                />
                <br />
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-label="Disabled input example"
                  enabled
                />
                <br />
              </>
            </Card.Text>
            <Button variant="primary" className="btn">
              Login
            </Button>
            <p>
              <a href="#">Sign Up</a>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Loginform;
