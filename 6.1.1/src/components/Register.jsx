import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";

function Register() {
  return (
    <div>
      <span className="register">
        <Card>
          <Card.Body>
            <Card.Title>
              <h1>Register</h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <h4>Etixss</h4>
            </Card.Subtitle>
            <Card.Text>
              <Container fluid>
                <Row>
                  <Col>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                    <br />
                    <Form.Control
                      type="text"
                      placeholder="Disabled readonly input"
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Col>

                  <Col>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                    <br />
                    <Form.Control
                      type="text"
                      placeholder="Disabled readonly input"
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Col>
                </Row>

                <br />

                <Row>
                  <Col>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                    <br />
                    <Form.Control
                      type="text"
                      placeholder="Disabled readonly input"
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Col>

                  <Col>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                    <br />
                    <Form.Control
                      type="text"
                      placeholder="Disabled readonly input"
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                    <br />
                    <Form.Control
                      type="text"
                      placeholder="Disabled readonly input"
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Col>

                  <Col>
                    {" "}
                    <Form.Control
                      type="text"
                      placeholder="Disabled input"
                      aria-label="Disabled input example"
                      disabled
                      readOnly
                    />
                    <br />
                    <Form.Control
                      type="text"
                      placeholder="Disabled readonly input"
                      aria-label="Disabled input example"
                      readOnly
                    />
                  </Col>
                </Row>
                <br />
                <Button variant="primary">Primary</Button>
              </Container>
            </Card.Text>
            <Card.Link href="#">
              {" "}
              <Link to="Loginform">Already registered? Login</Link>
            </Card.Link>
          </Card.Body>
        </Card>
      </span>
    </div>
  );
}

export default Register;
