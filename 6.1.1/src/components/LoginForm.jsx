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
import Stack from "react-bootstrap/Stack";

import "./instyle.css";

function Loginform() {
  return (
    <div>
      <Card className="kard">
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
  );
}

export default Loginform;
